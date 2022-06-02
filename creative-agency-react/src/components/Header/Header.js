import React from 'react';
import './Header.css';
import bannerImage from '../../images/logos/Frame.png';

const Header = () => {
    return (
       <section id="header">
          <div className="container">
             <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className="header-content">
                      <h2>Let’s Grow Your Brand To The Next Level</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                         <button>Hire Us</button>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="banner">
                     <img src={bannerImage} alt="" />
                  </div>
                </div>
             </div>
          </div>
     </section>
    );
};

export default Header;