import React,{useContext,useEffect,useState} from 'react'
import StoreContext from '../../Store';
import { Space, Table, Tag,Button } from 'antd';
export default function StuList() {
    const store = useContext(StoreContext)
    const [forceUpdate, setforceUpdate] = useState({})
    useEffect(() => {
      store.subscribe(()=>{
        setforceUpdate({})
      })
    }, [])
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          align:"center",
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          align:"center",
          key: 'sex',
        },
        {
            title: '分数',
            dataIndex: 'grade',
            align:"center",
            key: 'grade',
        },
        
        {
          title: 'Action',
          align:"center",
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button size='small' type="primary" onClick={()=>{
                // console.log("增加");

                store.dispatch({type:'ADD_Stu',payload:{id:_.id,grade:_.grade+1}})
              }}>增加+</Button>
              <Button size='small' danger type="primary"  onClick={()=>{
                // console.log("减少");
                store.dispatch({type:'DC_Stu',payload:{id:_.id,grade:_.grade<=0?0:_.grade-1}})
              }}>减少-</Button>
            </Space>
          ),
        },
      ];
      const state = store.getState()
      const data = state.stuListReducer;
  return (
    <Table rowKey='id' columns={columns} dataSource={data} />
  )
}
