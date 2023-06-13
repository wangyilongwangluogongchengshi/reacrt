import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addTask, getTaskList, completeTask, removeTask } from "../../api/taskApi"
import { Button, Tag, Space, Table, Popconfirm, Modal, Form, Input, DatePicker,message } from 'antd';
import './index.less'

import {taskAction} from "../../store/action/actionCreators"
function TableWrapper(props) {
    
    const deleteTask = (val) => {
        props.deleteTask(val)
        props.getList()
    }
    const compeleteTask = (val) => {
        props.finish(val)
        props.getList()
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '描述',
            dataIndex: 'task',
            key: 'task',
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: '完成时间',
            dataIndex: 'complete',
            key: 'complete',
        },
        {
            title: '操作',
            render: (val, record) => (
                <>
                    <Popconfirm
                        title="提示"
                        description="确认要删除该任务嘛？"
                        onConfirm={() => { deleteTask(val.id) }}
                    >
                        <Button type="link">删除</Button>
                    </Popconfirm>

                    {+val.state !== 2 ? <Popconfirm title="您确把此任务设置为完成吗？"
                        onConfirm={() => { compeleteTask(val.id) }}>
                        <Button type="link">完成</Button>
                    </Popconfirm> : null}
                </>


            ),
        },
    ];
    const data = [
       ...props.taskList
    ];
    return <Table columns={columns} dataSource={data} rowKey="id" />
}
function Task(props) {
    const editBtnList = ['全部', '未完成', '已完成']
    const [editActive, setEditActive] = useState(0)
    const [modalVisible, setmodalVisible] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const taskList = props.taskList
    // antd中通过Form.useForm配置Form组件可以或者Form组件中的详细信息
    let [formIns] = Form.useForm();
    // console.log(props);
    useEffect(()=>{
        getList()
    },[editActive])
    const getList = ()=>{
        props.search({state:editActive})
    }
    const setModalVisible = (val) => {
        setmodalVisible(true)
    }
    const changeEdit = (val) => {
        // 切换状态
        setEditActive(val)
    }
    const closeModal = (val) => {
        setmodalVisible(false)
        formIns.resetFields()
    }
    const submit = async () => {
        // 如果检验不通过会报错
        try {
            await formIns.validateFields()
            let { task, time } = formIns.getFieldsValue();
            time = time.format('YYYY-MM-DD HH:mm:ss');
            const result = await addTask(task,time)
            closeModal()
            getList()
        } catch (error) {
            message.error('请将表单填写完成');
        }
    }

    return (
        <div className='task-box'>
            <header>
                <h2>列表</h2>
                <Button type="primary" onClick={() => {
                    setModalVisible(true);
                }}>新增任务</Button>
            </header>
            <main>
                <div className='editBtnList'>
                    {editBtnList.map((item, index) => {

                        return <Tag
                            className={editActive === index ? 'active' : ''}
                            key={item}
                            onClick={() => {
                                changeEdit(index)
                            }}
                        >{item}</Tag>
                    })}
                </div>
                <TableWrapper taskList={taskList} finish={props.finish} deleteTask={props.deleteTask} getList={getList}/>
            </main>
            {/* 对话框 & 表单 */}
            <Modal title="新增任务窗口" open={modalVisible} confirmLoading={confirmLoading} keyboard={false} maskClosable={false} okText="确认提交" onCancel={closeModal} onOk={submit}>
                <Form
                    name="basic"
                    form={formIns}
                    autoComplete="off"
                >
                    <Form.Item label="任务描述" name="task"
                        rules={[
                            { required: true, message: '任务描述是必填项' },
                            { min: 6, message: '输入的内容至少6位及以上' }
                        ]}>
                        <Input.TextArea rows={4}></Input.TextArea>
                    </Form.Item>
                    <Form.Item label="预期完成时间" name="time"
                        rules={[
                            { required: true, message: '预期完成时间是必填项' }
                        ]}>
                        <DatePicker showTime />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        taskList:state.task
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        search(params){
            dispatch(taskAction.search(params))
        },
        finish(id){
            dispatch(taskAction.finish(id))
        },
        deleteTask(id){
            dispatch(taskAction.delete(id))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Task)
