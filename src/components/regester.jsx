import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const Regester = () => {
    const firstnameref = useRef(null)
    const surnameref = useRef(null)
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const submitpasswordref = useRef(null)
    const navigate = useNavigate()

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
            <h1>Ruyhatdan o'tish</h1>
            <label htmlFor="firtname">Firtname</label>
            <input placeholder='firstname' id='firtname' ref={firstnameref} />
            <label htmlFor="surname">Surname</label>
            <input placeholder='surname' id='surname' ref={surnameref} />
            <label htmlFor="yourPhoneNumber">Your phone number</label>
            <input type={'email'} placeholder='email@google.com' id='yourPhoneNumber' ref={emailref} />
            <label htmlFor="password">Parol kiriting</label>
            <input type={'password'} placeholder='password' id='password' ref={passwordref} />
            <label htmlFor="submitpassword">Parolni qayta tering</label>
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

            }>Save</Button>

        </div>

    </div>
}

export default Regester