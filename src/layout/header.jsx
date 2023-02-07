import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            Logo    
            <div className="header-nav">
                <ul>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/find'>Topib oldim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/lost'>Yoqotdim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-in'>Kirish</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-up'>Ruyhatdan otish</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
