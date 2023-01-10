import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// organisms
import Sidebar from './../components/organisms/sidebar';

// Pages
import Dashboard from './../pages/private/dashboard';
import ApplicationListPage from './../pages/private/applicationsListPage';

// css
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
        <Route path='apis' element={<ApplicationListPage />} />
      </Route>
    </Routes>
  );
};

export default Private;
