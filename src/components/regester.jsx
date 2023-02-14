import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { getlanguagefromlocalstorage, setlanguagetolocalstorage } from '../utils/storage';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Regester = () => {
    const [state, setState] = useState(true)
    const [lan, setlan] = useState(getlanguagefromlocalstorage())
    const firstnameref = useRef(null)
    const surnameref = useRef(null)
    const emailref = useRef(null)
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

    //

    function abbos(data) {
        // console.log(data)
        let a = "sizning xatolariz\n "

        if (data.password === data.submitpassword && data.password.length >= 8) {

            const src = "http://188.225.31.249:8000/api/v1/register/"
            axios.post(src, {
                "username": data.firstname,
                "first_name": data.firstname,
                "last_name": data.surname,
                "email": data.email,
                "is_active": true,
                "is_superuser": false,
                "is_staff": true,
                "password": data.password,
                "password2": data.submitpassword
            }

            ).then((response => {
                if (response.status === 201) {
                    const src = "http://188.225.31.249:8000/api/v1/login/"
                    axios.post(src, {
                        "username": data.firstname,
                        "password": data.password,
                    }
                    ).then((response => {
                        if (response.status === 200) {
                            localStorage.setItem("login", response.data)
                            navigate('/')
                        }
                    }))
                }
            }
            )
            )
        }
        else {
            if (data.password !== data.submitpassword) a = a + "parol mos emas\n"
            if (data.password.length < 8) a = a + "parol uzunligi sakkizdan katta yoki bolishi kerak"
            alert(a)
        }

    }
    //



    return <div className="addFed">
        <div className='nomsiz'>
            <h1>{t("SignUpWindow")}</h1>
            <label htmlFor="firtname">{t("Firstname")}</label>
            <input placeholder='firstname' id='firtname' ref={firstnameref} />
            <label htmlFor="surname">{t("Surname")}</label>
            <input placeholder='surname' id='surname' ref={surnameref} />
            <label htmlFor="yourPhoneNumber">{t("Email")}</label>
            <input type={'email'} placeholder='email@google.com' id='yourPhoneNumber' ref={emailref} />
            <label htmlFor="password">{t("Password1")}</label>
            <input type={'password'} placeholder='password' id='password' ref={passwordref} />
            <label htmlFor="submitpassword">{t("Password2")}</label>
            <input type={'password'} placeholder='submit password' id='submitpassword' ref={submitpasswordref} />


            <Button type="primary" className='nomsizbutton' onClick={() => {
                const data = {
                    firstname: firstnameref.current.value,
                    surname: surnameref.current.value,
                    email: emailref.current.value,
                    password: passwordref.current.value,
                    submitpassword: submitpasswordref.current.value
                }
                abbos(data)
            }

            }>{t("Save")}</Button>

        </div>

    </div>
}

export default Regester