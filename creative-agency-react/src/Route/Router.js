import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFound from '../components/NotFound/NotFound';
import Admin from '../Admin/Components/Admin/Admin';
import UserList from '../Admin/Pages/UserList/UserList';
import Home from '../Admin/Pages/home/Home';
import ProductList  from '../Admin/Pages/ProductList/ProductList'
import Product from '../Admin/Pages/Product/Product';
import NewProduct from '../Admin/Pages/newProduct/newProduct';
import User from '../Admin/Pages/User/User';
import NewUser from '../Admin/Pages/newUserPage/NewUser';
import Login from '../Admin/Components/Login/Login';

const Router = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path="admin/login" element={<Login />} />
              <Route element={<Admin />}>
                <Route path='admin' element={<Home  />} />
                <Route path='user' element={<UserList  />} />
                <Route path="user/:userId" element={<User />} />
                <Route path="newuser" element={<NewUser />} />
                <Route path='product' element={<ProductList  />} />
                <Route path='product/:productId' element={<Product />} />
                <Route path="newproduct" element={<NewProduct />} />
              </Route>
              <Route path='*' element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    );
};

export default Router;