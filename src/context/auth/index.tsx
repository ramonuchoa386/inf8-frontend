/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from 'react';
import useFetchSession from '../../hooks/useFetchSession';
import { Profiles } from '../../utils/enums';
import { IKeepAliveResponse } from '../../utils/interfaces';

export interface IUserInfo {
  logged: boolean;
}

export type UserData = IUserInfo &
  Pick<IKeepAliveResponse, 'pcw' | 'name' | 'organization' | 'email'>;

interface IAuthContextProvider {
  state: UserData;
  signIn: (args: Omit<UserData, 'logged'>) => void;
  signOut: () => void;
}

const DEFALUT_VALUE = {
  state: {
    logged: sessionStorage.getItem('@vtal/inf8/logged') === 'true',
    pcw:
      (sessionStorage.getItem('@vtal/inf8/userProfile') as Profiles) ||
      Profiles['NONE'],
    name: sessionStorage.getItem('@vtal/inf8/userName') || '',
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
  const [state, setState] = useState<UserData>(DEFALUT_VALUE.state);
  const {error, loading, userInfo} = useFetchSession();

  const signIn = (args: Omit<UserData, 'logged'>) => {
    const { email, organization, pcw, name } = args;

    sessionStorage.setItem('@vtal/inf8/logged', 'true');
    sessionStorage.setItem('@vtal/inf8/userProfile', pcw);
    sessionStorage.setItem('@vtal/inf8/userName', name);
    sessionStorage.setItem('@vtal/inf8/userEmail', email);

    const userState: Omit<UserData, 'logged'> = {
      pcw: Profiles[pcw],
      name: name,
      email: email,
      organization: organization,
    };

    if (pcw !== Profiles.OP_VTAL && organization !== undefined) {
      sessionStorage.setItem('@vtal/inf8/userOrg', organization);

      Object.assign(userState, {
        organization: organization,
      });
    }

    setState(() => ({
      logged: true,
      ...userState,
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
      pcw: Profiles['NONE'],
      name: '',
      organization: '',
      email: '',
    }));
  };

  useEffect(() => {
    if(!loading) {
      if(error === undefined && userInfo !== undefined) {
        const { pcw, organization, name, email } = userInfo;
        setState(() => ({
          logged: true,
          pcw,
          organization,
          name,
          email
        }));
      }
    }
  }, [loading, userInfo, error]);

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
