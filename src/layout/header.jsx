import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Header() {
    return (
        <div className="header">
            <div className='logo'>Logo</div>
            <div className="header-nav">
                <ul>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/find'>Topib oldim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/lost'>Yoqotdim</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-in'>Kirish</Link>
                    <Link style={{marginRight: 40, textDecoration: 'none', color: 'white'}} to='/sign-up'>Ruyhatdan otish</Link>
                </ul>
            </div>
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </div>
    );
}

export default Header;
