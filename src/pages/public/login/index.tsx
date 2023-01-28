import React, { useContext, useState } from 'react';
import AuthContext, { IUserInfo } from '../../../context/auth';
import {
  MOCK_OP_VTAL,
  MOCK_VW_VTAL,
  MOCK_CP_MASTER,
  MOCK_CP_ADMIN,
} from '../../../context/auth/auth.mock';
import { Profiles } from '../../../utils/enums';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [mockProfile, setMockProfile] =
    useState<Omit<IUserInfo, 'logged'>>(MOCK_OP_VTAL);

  const handleSelectProfile = (profile: Profiles) => {
    switch (profile) {
      case Profiles.VW_VTAL:
        setMockProfile(() => MOCK_VW_VTAL);
        break;

      case Profiles.CP_MASTER:
        setMockProfile(() => MOCK_CP_MASTER);
        break;

      case Profiles.CP_ADMIN:
        setMockProfile(() => MOCK_CP_ADMIN);
        break;

      default:
        setMockProfile(() => MOCK_OP_VTAL);
        break;
    }
  };

  return (
    <>
      <h1>Perfil</h1>
      <select onChange={(e) => handleSelectProfile(e.target.value as Profiles)}>
        <option value='OP_VTAL'>OP_VTAL</option>
        <option value='VW_VTAL'>VW_VTAL</option>
        <option value='CP_MASTER'>CP_MASTER</option>
        <option value='CP_ADMIN'>CP_ADMIN</option>
      </select>

      <button onClick={() => signIn(mockProfile)}>Login</button>
    </>
  );
};

export default Login;
