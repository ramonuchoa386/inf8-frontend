import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './../components/organisms/sidebar';
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
      <Route path='/inf8/' element={<Layout />}>
        <Route index element={<ReportListPage />} />
      </Route>
    </Routes>
  );
};

export default Private;
