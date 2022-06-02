import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPanel.css';

const AdminLoginPanel = () => {
   const [adminValue, setAdminValue] = useState()

   const handleBlur = (e) => {
     let isFormValid
     if(e.target.name === 'username' && e.target.value.length > 6){
           isFormValid = e.target.value
     }
     if(e.target.name === 'password'){
       const isPasswordValid = e.target.value.length > 8
       const passwordHasNumber = /\d{1}/.test(e.target.value)
       isFormValid = isPasswordValid && passwordHasNumber
     }
     if(e.target.name === 'name'){
        isFormValid = e.target.value
     }
     if(isFormValid){
       const newAdminValue = {...adminValue}
       newAdminValue[e.target.name] = e.target.value
       setAdminValue(newAdminValue)
     }
   }


   const navigate = useNavigate()
  // submit to database
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(adminValue)
    if(adminValue.username == 'admininfo@email.com' && adminValue.password == 'admin8888'){
      storgeAdminToken()
    }
  }

  // set admin token
  const storgeAdminToken = () => {
    sessionStorage.setItem('role', 'admin')
    navigate('/admin')
  }



    return (
        <>
         <div id="adminLogin" class="main-container">
            <div class="box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="input-box">
              <input id="user-name" type="text" name="username" required onBlur={handleBlur}/>
              <label>Username</label>
              </div>
              <div class="input-box">
              <input id="user-pass" type="password" name="password" required onBlur={handleBlur}/>
              <label>Password</label>
             </div>
             <input id="submit" type="submit" name="" value="Login" className='mb-2'/>
            </form>
              <p><a href="#">Lost your password?</a></p>
            </div>
          </div>
        </>
    );
};

export default AdminLoginPanel;