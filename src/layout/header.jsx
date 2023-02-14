
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from "./logo/Losts`1.png"

import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';


function Header() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    localStorage.setItem("src", "")
    return (
        <div className="header">
            <img src={logo} width="70px"></img>

            <div className="header-nav">
                <ul className='head-ul'>
                    {/* <Link style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} to="/addelem/topdim">{t("Topib oldim")}</Link> */}
                    <p style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} onClick={() => {
                        if (localStorage.getItem("login")) { navigate('/addelem/topdim')} else navigate('/sign-in')
                    }}>{t("Topib oldim")}</p>
                    <p style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} onClick={() => {
                        if (localStorage.getItem("login")) { navigate('/addelem/topdim') } else navigate('/sign-in')
                    }}>{t("Yoqotdim")}</p>
                    {/* <Link style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} to="/addelem/yoqotdim">{t("Yoqotdim")}</Link> */}
                    <Link style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} to='/sign-in'>{t("Kirish")}</Link>
                    <Link style={{ marginRight: 40, textDecoration: 'none', color: 'white' }} to='/regester'>{t("Ruyhatdan o'tish")}</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
