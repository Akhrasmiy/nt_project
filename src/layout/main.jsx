import MainElem from "../components/mainElem";
import Headmain from "./headmain";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";
const Main = () => {

  const [fikrs, setfikr] = useState([]);
  const [type, setType] = useState("topdim")
  const [update, setUpdate] = useState(0)


  useEffect(() => {
    axios
      .get(`http://188.225.31.249:3001/findings`)
      .then(response => {
        setfikr(response.data)
      })
  }, [update])

  return (
    <main className="main">
      <Headmain setType={setType} />
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