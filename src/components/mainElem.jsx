import React, {  } from 'react';
import axios from "axios";
// "title": "Passport topib oldim",
//     "user": 2,
//     "cateogry": 1,
//     "type": "finding",
//     "description": "Muqimiy ko'chaga qayrilishda passport topib oldim",
//     "image": "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80",
//     "tags": [
//       "hujjat",
//       "topilma"
// console.log(style)
const MainElem = (props) => {
  const { title , cateogry, image, votes,type ,description,id,tags} = props.fikr;

  const trash=(id)=>{
    axios.delete(`http://188.225.31.249:3001/findings/${id}`).then((response => {
      if (response.status === 200) {
        props.setUpdate(u => u+1)
      }
  }))
  }
  return <div className='mainelem'>
    <img className='elemImage' width={300} style={{marginTop:10}} src={image} alt="" />
    <h3>{title}</h3>
    <p>{description}</p>
    
    
    <p style={{cursor: 'pointer', backgroundColor: 'red', padding: 5, width: 60, color: 'white', borderRadius: 20}} onClick={()=>{trash(id)}}>Delete</p>

    {/* {tags} */}
  </div>
}

export default MainElem