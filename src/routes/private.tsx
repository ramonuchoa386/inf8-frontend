import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './../components/organisms/sidebar';
import Dashboard from './../pages/private/dashboard';
import ReportListPage from '../pages/private/reportListPage';
import * as S from './styles';

const Layout = () => (
  <S.Main>
    <Sidebar />
    <Outlet />
  </S.Main>
);

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='relatorio-de-envio' element={<ReportListPage />} />
      </Route>
    </Routes>
  );
};

export default Private;
