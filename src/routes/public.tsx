import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Login from './../pages/public/login';

const Public = () => {
  return (
    <Routes>
      <Route path='/inf8/'>
        <Route index element={<Login />} />
        <Route path='*' element={<Navigate to='/inf8' replace />} />
      </Route>
    </Routes>
  );
};

export default Public;
