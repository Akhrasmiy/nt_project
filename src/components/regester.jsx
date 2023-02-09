import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Regester = () => {
    const firstnameref = useRef(null)
    const surnameref = useRef(null)
    const phoneNumberref = useRef(null)
    const passwordref = useRef(null)
    const submitpasswordref = useRef(null)
    const navigate = useNavigate()
    function regester(data) {
        let a = "sizning xatolariz\n "
        
        if (data.password === data.submitpassword && data.phoneNumber.length === 9 && data.password.length >= 8) { navigate('/') }
        else {
            if (data.password !== data.submitpassword) a = a + "parol mos emas\n"
            if (data.phoneNumber.length !== 9) a = a + "telifon raqamni operator kodidan boshlab kirdiring (90 900 09 90) \n"
            if (data.password.length < 8) a = a + "parol uzunligi sakkizdan katta yoki bolishi kerak"
            alert(a)
        }

    }

    return <div className="addFed">
        <div className='nomsiz'>
            <h1>Ruyhatdan o'tish</h1>
            <label htmlFor="firtname">Firtname</label>
            <input placeholder='firstname' id='firtname' ref={firstnameref} />
            <label htmlFor="surname">Surname</label>
            <input placeholder='surname' id='surname' ref={surnameref} />
            <label htmlFor="yourPhoneNumber">Your phone number</label>
            <input type={'number'} placeholder='phoneNumber' id='yourPhoneNumber' ref={phoneNumberref} />
            <label htmlFor="password">Parol kiriting</label>
            <input type={'password'} placeholder='password' id='password' ref={passwordref} />
            <label htmlFor="submitpassword">Parolni qayta tering</label>
            <input type={'password'} placeholder='image' id='submitpassword' ref={submitpasswordref} />


            <button className='nomsizbutton' onClick={() => {
                const data = {
                    firstname: firstnameref.current.value,
                    surname: surnameref.current.value,
                    phoneNumber: phoneNumberref.current.value,
                    password: passwordref.current.value,
                    submitpassword: submitpasswordref.current.value
                }
                regester(data)
            }

            }>Save</button>

        </div>

    </div>
}

export default Regester