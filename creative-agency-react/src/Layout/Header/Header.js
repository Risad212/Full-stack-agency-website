import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logos/logo.png';
import './Header.css'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
      if(window.scrollY > 80){
         setNavbar(true)
      }
      else{
        setNavbar(false)
      }
    }

    window.addEventListener('scroll', changeBackground)
    return (
     <section id='navbar' className={navbar? 'activeNav': ''}>
       <nav class="navbar navbar-expand-lg navbar-light w-100">
        <div class="container">
          <a class="navbar-brand" href="#/"><img src={Logo} alt="" style={{width: '30%'}}/></a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
             <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                   <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">Our Portfolio</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">About</Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link" to="/">Contact</Link>
                </li>
                <li class="nav-item loginBtn">
                   <Link class="nav-link text-white" to="/login">login</Link>
                 </li>
                </ul>
             </div>
          </div>
        </nav> 
     </section>
    );
};

export default Header;