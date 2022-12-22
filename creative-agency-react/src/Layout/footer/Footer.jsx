import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='main-font py-5'>
            <div className="container">
               <div className="row py-5">
                  <div className="col-md-6 footer-content">
                      <h2>Let us handle your <br /> project, professionally.</h2>
                       <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                  </div>
                  <div className="col-md-6 footer-form">
                    <form action="#">
                      <div className='mb-2'>
                        <input type="email" id="email" name="firstname" placeholder="Your email address" />
                      </div>
                      <div className='mb-2'>
                        <input type="text" id="name" name="firstname" placeholder="Your name / company’s name" />
                      </div>
                       <div className='mb-2'>
                         <textarea id="subject" name="subject" placeholder="Your message" style={{height: '200px'}}></textarea>
                       </div>
                      <div>
                         <input type="submit" value="Send" className='btn' id="submit"/>
                      </div>
                    </form>
                  </div>
               </div>
               <span className='d-block text-center py-5'>copyright Orange labs 2020</span>
            </div>
        </footer>
    );
};

export default Footer;