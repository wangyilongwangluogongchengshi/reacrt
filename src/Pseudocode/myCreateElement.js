export default function createElement (ele,props,...children){
    let virtualDOM = {
        $$typeof: Symbol('react.element'),
        type: null,
        key: null,
        ref: null,
        
        props: {}
    };
    virtualDOM.type = ele
    virtualDOM.props = {...props}
    children.length === 1?virtualDOM.props.children = children[0]:virtualDOM.props.children = children
    
    // console.log(virtualDOM);
    return virtualDOM
}