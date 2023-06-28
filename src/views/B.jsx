import qs from 'qs';
import React from 'react'
// import {useNavigate,useParams, useSearchParams, useLocation, useMatch  } from 'react-router-dom'
export default function B(props) {
  console.log(props);
  const {navigate} = props;


  return (
    <>
    <h2>B的内容</h2>
    <button onClick={()=>{
     navigate('/test')
   
    }}>goTest</button>
    </>
    
  )
}
