import MainElem from "../components/mainElem";
import Headmain from "./headmain";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";
import useSRC from "../hooks/useSRC";
import { getTypefromlocalstorage,setTypetolocalstorage } from "../utils/storage";
const Main = () => {
  // const [src,setsrc]=useSRC()
  // console.log(src)
  const [fikrs, setfikr] = useState([]);
  const [type, setType] = useState("topdim")
  const [update, setUpdate] = useState(0)
  const src=localStorage.getItem("src")
  console.log(src)

  useEffect(() => {
    axios
      .get(`http://188.225.31.249:3001/findings?q=${src}`)
      .then(response => {
        setfikr(response.data)
      })
  }, [update])

  return (
    <main className="main">
      <Headmain setType={setType} setUpdate={setUpdate} />
      <div className="mainMain">
        {fikrs.map((fikr, index) => {
          if (fikr.type == type) {
            return (
              <MainElem fikr={fikr} key={index} setUpdate={setUpdate} />

            )
          }
        })}

      </div>


    </main>
  )
}

export default Main