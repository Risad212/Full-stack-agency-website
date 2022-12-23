import React from 'react';
import adminlogin from './Login.module.css';
import admin from '../../../images/adminImg.png';

const Login = () => {
    return (
        <>
            <div className={adminlogin.loginBox}>
                <div className={adminlogin.login}>
                    <img src={admin} alt="" />
                    <form action="#">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="submit" value='Login' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;