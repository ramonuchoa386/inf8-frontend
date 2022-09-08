import React, { useContext } from 'react';

import AuthContext from '../context/auth';

// Pages test

import Private from './private';
import Public from './public';

const Index = () => {
  const { state } = useContext(AuthContext);

  return state.logged ? <Private /> : <Public />;
};

export default Index;
