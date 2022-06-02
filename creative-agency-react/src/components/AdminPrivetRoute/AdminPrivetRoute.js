import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPrivetRoute = ({children}) => {
    const isAdmin = sessionStorage.getItem('role')
    return isAdmin ? children : <Navigate to="/adminlogin"/>
};

export default AdminPrivetRoute;