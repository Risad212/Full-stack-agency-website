import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFound from '../components/NotFound/NotFound';
import Admin from '../Admin/Components/Admin/Admin';
import UserList from '../Admin/Pages/UserList/UserList';
import Home from '../Admin/Pages/home/Home';

const Router = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route element={<Admin />}>
                <Route path='/admin' element={<Home  />} />
                <Route path='/user' element={<UserList  />} />
              </Route>
              <Route path='*' element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    );
};

export default Router;