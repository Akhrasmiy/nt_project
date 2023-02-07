import MainElem from "../components/mainElem";
import Headmain from "./headmain";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  const [fikrs, setfikr] = useState([])
  useEffect(() => {
    axios
      .get(`http://188.225.31.249:3001/findings`)
      .then(data => {
        setfikr(data.data)
      })
  }, [])
  return (
    <main className="main">
      <Headmain />
      <div className="mainMain">
        <Link className="addelemLink" to="/addelem">E'lon berish</Link>
        {fikrs.map((fikr, index) => {
          return (
            <MainElem fikr={fikr} key={index} />

          )

        })}

      </div>


    </main>
  )
}

export default Main