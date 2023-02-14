import React, { useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { getlanguagefromlocalstorage, setlanguagetolocalstorage } from '../utils/storage';
import { useEffect } from 'react';
import { useState } from 'react';
const SignIn = () => {
    const [state, setState] = useState(true)
    const [lan, setlan] = useState(getlanguagefromlocalstorage())
    const firstnameref = useRef(null)
    const surnameref = useRef(null)
    const phoneNumberref = useRef(null)
    const passwordref = useRef(null)
    const submitpasswordref = useRef(null)
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()
    function handleselect(e) {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
        setlanguagetolocalstorage(e.target.value)
        setlan(e.target.value)
    }

    useEffect(() => {
        const language = getlanguagefromlocalstorage()
        i18n.changeLanguage(language)
    }, [])
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
                <h1>{t("SignIn")}</h1>
                <label htmlFor="yourPhoneNumber">{t("PhoneNum")}</label>
                <input type={'text'} placeholder='phoneNumber' id='yourPhoneNumber' ref={phoneNumberref} />
                <label htmlFor="password">{t("Password")}</label>
                <input type={'password'} placeholder='password' id='password' ref={passwordref} />


                <Button type="primary" className='nomsizbutton' onClick={() => {
                    const data = {
                        username: phoneNumberref.current.value,
                        password: passwordref.current.value,

                    }
                    regester(data)
                }

                }>{t("Save")}</Button>
            </div>
        </div>

    </div>
}

export default SignIn