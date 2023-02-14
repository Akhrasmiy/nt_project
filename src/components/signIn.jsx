import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const SignIn = () => {
    const firstnameref = useRef(null)
    const surnameref = useRef(null)
    const phoneNumberref = useRef(null)
    const passwordref = useRef(null)
    const submitpasswordref = useRef(null)
    const navigate = useNavigate()
    function regester(data) {
        let a = "sizning xatolariz\n "

        if (data.password.length >= 8) {
            // navigate('/')
           
            const src = "http://188.225.31.249:8000/api/v1/login/"
            axios.post(src, {
                "username": data.username,
                "password": data.password,
            }

            ).then((response => {
                console.log(response.data)
                if (response.status === 200) { 
                    console.log(response.data)
                    localStorage.setItem("login",response.data)
                    navigate('/')
                 }
            }))


        }
        else {
            if (data.phoneNumber.length !== 9) a = a + "telifon raqamni operator kodidan boshlab kirdiring (90 900 09 90) \n"
            if (data.password.length < 8) a = a + "parol uzunligi sakkizdan katta yoki teng bolishi kerak"
            alert(a)
        }

    }

    return <div className="addFed">
        <div className='nomsiz'>
            <div>
                <h1>Hisobga kirish</h1>
                <label htmlFor="yourPhoneNumber">Your phone number</label>
                <input type={'text'} placeholder='phoneNumber' id='yourPhoneNumber' ref={phoneNumberref} />
                <label htmlFor="password">Parol kiriting</label>
                <input type={'password'} placeholder='password' id='password' ref={passwordref} />


                <Button type="primary" className='nomsizbutton' onClick={() => {
                    const data = {
                        username: phoneNumberref.current.value,
                        password: passwordref.current.value,

                    }
                    regester(data)
                }

                }>Save</Button>
            </div>
        </div>

    </div>
}

export default SignIn