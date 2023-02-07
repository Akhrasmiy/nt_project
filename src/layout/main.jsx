import MainElem from "../components/mainElem";
import Headmain from "./headmain";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";

const Main = () => {
  const[fikrs,setfikr]=useState([])
  useEffect(()=>{
   axios
      .get(`http://188.225.31.249:3001/findings`)
      .then(data=>{
        setfikr(data.data)
      })
  }, [])
  return (
    <main className="main">
      <Headmain />
      <div className="mainMain">
      {fikrs.map((fikr,index)=>{
        return(
          <MainElem fikr={fikr} key={index} />
        )
      })}
      </div>
      
      
    </main>
  )
}

export default Main