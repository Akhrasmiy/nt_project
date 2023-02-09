import logo from "./logo/Losts`1.png"

import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <img src={logo} width="70px"></img>

            <div className="header-nav">
                <ul>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to="/addelem/topdim">Topib oldim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to="/addelem/yoqotdim">Yoqotdim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-in'>Kirish</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/regester'>Ruyhatdan o'tish</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
