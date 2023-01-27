/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import { Profiles } from '../../utils/enums';
import { mock } from './auth.mock';

interface IUserInfo {
  logged: boolean;
  profile: Profiles;
  userName: string;
  organization: string;
  email: string;
}

interface IAuthContextProvider {
  state: IUserInfo;
  signIn: () => void;
  signOut: () => void;
}

const DEFALUT_VALUE = {
  state: {
    logged: sessionStorage.getItem('@vtal/inf8/logged') === 'true',
    profile:
      (sessionStorage.getItem('@vtal/inf8/userProfile') as Profiles) ||
      Profiles['NONE'],
    userName: sessionStorage.getItem('@vtal/inf8/userName') || '',
    organization: sessionStorage.getItem('@vtal/inf8/userOrg') || '',
    email: sessionStorage.getItem('@vtal/inf8/userEmail') || '',
  },
  signIn: () => {},
  signOut: () => {},
};
const AuthContext = createContext<IAuthContextProvider>(DEFALUT_VALUE);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(DEFALUT_VALUE.state);

  const signIn = () => {
    sessionStorage.setItem('@vtal/inf8/logged', 'true');
    sessionStorage.setItem('@vtal/inf8/userProfile', mock.profile);
    sessionStorage.setItem('@vtal/inf8/userName', mock.userName);
    sessionStorage.setItem('@vtal/inf8/userOrg', mock.organization);
    sessionStorage.setItem('@vtal/inf8/userEmail', mock.email);

    setState(() => ({
      logged: true,
      profile: Profiles[mock.profile],
      userName: mock.userName,
      organization: mock.organization,
      email: mock.email,
    }));
  };

  const signOut = () => {
    sessionStorage.removeItem('@vtal/inf8/logged');
    sessionStorage.removeItem('@vtal/inf8/userProfile');
    sessionStorage.removeItem('@vtal/inf8/userName');
    sessionStorage.removeItem('@vtal/inf8/userOrg');
    sessionStorage.removeItem('@vtal/inf8/userEmail');

    setState(() => ({
      logged: false,
      profile: Profiles['NONE'],
      userName: '',
      organization: '',
      email: '',
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
