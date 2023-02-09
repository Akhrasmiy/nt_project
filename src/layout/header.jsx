
import { useTranslation } from 'react-i18next';

import logo from "./logo/Losts`1.png"

import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';


function Header() {
    const {t,i18n}=useTranslation()

    return (
        <div className="header">
            <img src={logo} width="70px"></img>

            <div className="header-nav">
                <ul>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to="/addelem/topdim">{t("Topib oldim")}</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to="/addelem/yoqotdim">{t("Yoqotdim")}</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-in'>{t("kirish")}</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/regester'>{t("Ruyhatdan o'tish")}</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
