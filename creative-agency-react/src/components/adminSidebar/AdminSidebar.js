import React from 'react';
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <section className='adminSidebar'>
           <div className='pt-4'>
             <Link to="/"><img src={logo} alt="" className='w-50 ms-3'/></Link>
           </div>
           <div className="adminSidebarContent">
              <ul className='pt-5'>
                 <li><Link to="/admin"><FontAwesomeIcon icon={faCashRegister} className="me-2"/>Service list</Link></li>
                 <li><Link to="/admin/addservice"><FontAwesomeIcon icon={faPlus} className="me-2"/>Add Service</Link></li>
                 <li><Link to="/admin/makeadmin"><FontAwesomeIcon icon={faUser} className="me-2"/>Make Admin</Link></li>
              </ul>
           </div>
        </section>
    );
};

export default AdminSidebar;