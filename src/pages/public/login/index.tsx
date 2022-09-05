import React, { useContext } from 'react';
import AuthContext from '../../../context/auth';

const Login = () => {
  const { singIn, state } = useContext(AuthContext);

  return (
    <>
      <h1>React Router - Está Logado? {JSON.stringify(state.logged)}</h1>
      <button onClick={singIn}>Login</button>
    </>
  );
};

export default Login;
