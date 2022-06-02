import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServiceListCard from '../components/ServiceListCard/ServiceListCard';
import Dashbaord from '../Pages/Dashbaord/Dashbaord';
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import Review from '../components/Review/Review';
import AdminDashbaord from '../Pages/AdminPanel/AdminDashbaord/AdminDashbaord';
import AddService from '../components/AdService/AddService';
import MakeAdmin from '../components/MakeAdmin/MakeAdmin';
import PrivateRoute from '../components/PrivetRoute/ProvetRoute'
import NotFound from '../components/NotFound/NotFound';
import AdminLoginPanel from '../components/AdminLoginPanel/AdminLoginPanel';
import AdminPrivetRoute from '../components/AdminPrivetRoute/AdminPrivetRoute';

const Router = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/dashboard' element={<PrivateRoute><Dashbaord /></PrivateRoute>} />
              <Route path='/dashboard/servicecard' element={<ServiceListCard />} />
              <Route path='/dashboard/review' element={<Review />} />
              <Route path='/admin' element={<AdminPrivetRoute><AdminDashbaord /></AdminPrivetRoute>} />
              <Route path='/admin/addservice' element={<AddService />} />
              <Route path='/admin/makeadmin' element={<MakeAdmin />} />
              <Route path='/adminlogin' element={<AdminLoginPanel />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    );
};

export default Router;