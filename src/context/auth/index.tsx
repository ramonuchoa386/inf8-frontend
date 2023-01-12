/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import { Profiles } from '../../utils/enums';
import { mock } from './auth.mock';

type UserInfo = {
  logged: boolean;
  profile: Profiles;
  userName: string;
};

type PropsAuthContext = {
  state: UserInfo;
  setState: React.Dispatch<React.SetStateAction<UserInfo>>;
  singIn: () => void;
  singOut: () => void;
};

const DEFALUT_VALUE = {
  state: {
    logged: sessionStorage.getItem('@vtal/inf8/logged') === 'true',
    profile:
      (sessionStorage.getItem('@vtal/inf8/userProfile') as Profiles) ||
      Profiles['NONE'],
    userName: sessionStorage.getItem('@vtal/inf8/userName') || '',
  },
  setState: () => {},
  singIn: () => {},
  singOut: () => {},
};
const AuthContext = createContext<PropsAuthContext>(DEFALUT_VALUE);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(DEFALUT_VALUE.state);

  const singIn = () => {
    sessionStorage.setItem('@vtal/inf8/logged', 'true');
    sessionStorage.setItem('@vtal/inf8/userProfile', mock.profile);
    sessionStorage.setItem('@vtal/inf8/userName', mock.userName);

    setState({
      ...state,
      logged: true,
      profile: Profiles[mock.profile],
      userName: mock.userName,
    });
  };

  const singOut = () => {
    sessionStorage.removeItem('@vtal/inf8/logged');

    setState({
      ...state,
      logged: false,
      profile: Profiles['NONE'],
      userName: '',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        singIn,
        singOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
