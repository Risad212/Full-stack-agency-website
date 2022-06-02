import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <section className='sidebar'>
           <div className='pt-4'>
             <Link to="/"><img src={logo} alt="" className='w-50 ms-3'/></Link>
           </div>
           <div className="sidebarContent main-font">
              <ul className='pt-5'>
                 <li><Link to="/dashboard"><FontAwesomeIcon icon={faShoppingCart} className="me-2"/>Order</Link></li>
                 <li><Link to="/dashboard/servicecard"><FontAwesomeIcon icon={faCashRegister} className="me-2"/>Service list</Link></li>
                 <li><Link to="/dashboard/review"><FontAwesomeIcon icon={faMessage} className="me-2"/>Review</Link></li>
              </ul>
           </div>
        </section>
    );
};

export default SideBar;