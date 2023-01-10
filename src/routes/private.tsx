import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// organisms
import Sidebar from './../components/organisms/sidebar';

// Pages
import Dashboard from './../pages/private/dashboard';
import Apis from './../pages/private/apis';
import Cwp from './../pages/private/cwp';
import Otk from './../pages/private/otk';
import Logs from './../pages/private/logs';

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
        <Route path='apis' element={<Apis />} />
        <Route path='cwp' element={<Cwp />} />
        <Route path='otk' element={<Otk />} />
        <Route path='logs' element={<Logs />} />
      </Route>
    </Routes>
  );
};

export default Private;
