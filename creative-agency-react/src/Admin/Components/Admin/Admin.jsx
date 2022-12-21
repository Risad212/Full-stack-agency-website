import React from 'react';
import { Outlet } from 'react-router-dom';
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
          <Outlet />
        </div>
        </>
    );
};

export default Admin;