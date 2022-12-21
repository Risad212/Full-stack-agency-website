import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFound from '../components/NotFound/NotFound';
import Admin from '../Admin/Components/Admin/Admin';

const Router = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    );
};

export default Router;