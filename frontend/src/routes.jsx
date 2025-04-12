import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages/Components
import Home from './pages/home';
import Login from './pages/logIn';
import SignIn from './pages/signup';
import Profil from './pages/profil';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<SignIn/>} />
      <Route path='/profil' element={<Profil/>} />
      {/* Catch-all 404 route */}    
      </Routes>
  );
};

export default AppRoutes;
