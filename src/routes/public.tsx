import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Login from './../pages/public/login';

const Public = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default Public;
