import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className='login-container'>
                <div className="login">
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