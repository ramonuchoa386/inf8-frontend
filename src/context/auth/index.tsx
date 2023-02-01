/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from 'react';
import useFetchSession from '../../hooks/useFetchSession';
import { Profiles } from '../../utils/enums';

export interface IUserInfo {
  logged: boolean;
  profile: Profiles;
  userName: string;
  organization?: string;
  email: string;
}

interface IAuthContextProvider {
  state: IUserInfo;
  signIn: (args: Omit<IUserInfo, 'logged'>) => void;
  signOut: () => void;
}

const DEFALUT_VALUE = {
  state: {
    logged: sessionStorage.getItem('@vtal/inf8/logged') === 'true',
    profile:
      (sessionStorage.getItem('@vtal/inf8/userProfile') as Profiles) ||
      Profiles['NONE'],
    userName: sessionStorage.getItem('@vtal/inf8/userName') || '',
    organization: sessionStorage.getItem('@vtal/inf8/userOrg') || undefined,
    email: sessionStorage.getItem('@vtal/inf8/userEmail') || '',
  },
  signIn: () => {},
  signOut: () => {},
};
const AuthContext = createContext<IAuthContextProvider>(DEFALUT_VALUE);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<IUserInfo>(DEFALUT_VALUE.state);
  const fetchSession = useFetchSession();

  const signIn = (args: Omit<IUserInfo, 'logged'>) => {
    const { email, organization, profile, userName } = args;

    sessionStorage.setItem('@vtal/inf8/logged', 'true');
    sessionStorage.setItem('@vtal/inf8/userProfile', profile);
    sessionStorage.setItem('@vtal/inf8/userName', userName);
    sessionStorage.setItem('@vtal/inf8/userEmail', email);

    const userState: Omit<IUserInfo, 'logged'> = {
      profile: Profiles[profile],
      userName: userName,
      email: email,
    };

    if (profile !== Profiles.OP_VTAL && organization !== undefined) {
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
      profile: Profiles['NONE'],
      userName: '',
      organization: undefined,
      email: '',
    }));
  };

  useEffect(() => {
    console.log(fetchSession);
  }, [fetchSession]);

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
