import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import Login from '../Pages/Login/Login';

const AllRouter = () => {
    return <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/*" element={<HomePage />}></Route>
  </Routes>;
};

export default AllRouter;
