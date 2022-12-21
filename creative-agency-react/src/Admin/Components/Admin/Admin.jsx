import React from 'react';
import Home from '../../Pages/home/Home';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './admin.css';

const Admin = () => {
    return (
        <>
        <Topbar />
        <div className='admin'>
          <Sidebar />
          <Home />
        </div>
        </>
    );
};

export default Admin;