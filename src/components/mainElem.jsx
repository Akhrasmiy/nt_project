import React, {  } from 'react';
import axios from "axios";

// console.log(style)
const MainElem = (props) => {
  const { title, description, votes ,id,tags,messages} = props.fikr;

  const trash=()=>{
    axios.delete(`http://188.225.31.249:3001/feedbacks/${id}`)
  }
  return <div className='mainelem'>
    <h3>{title}</h3>
    <p>{description}</p>
    
    <button className="votesfeedback" onClick={() => {
      axios.put(`http://188.225.31.249:3001/feedbacks/${id}`, {
        "title": title,
        "description": description,
        "votes": votes+1,
        "tags": tags,
        "messages": messages
    }
    ).then(response=> {if(response.status===200){window.location.reload(true);}})
    
    
    }}>{votes}</button>
    <p onClick={()=>{trash(id)}}>Delete</p>

    {/* {tags} */}
  </div>
}

export default MainElem