import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFound from '../components/NotFound/NotFound';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/footer/Footer';



const Router = () => {
    return (
       <BrowserRouter>
          <Header />
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
       </BrowserRouter>
    );
};

export default Router;