/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type SidebarType = {
  logged: boolean;
};

type PropsAuthContext = {
  state: SidebarType;
  setState: React.Dispatch<React.SetStateAction<SidebarType>>;
  singIn: () => void;
  singOut: () => void;
};

const DEFALUT_VALUE = {
  state: {
    logged: localStorage.getItem('apim-logged') === 'true',
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
    setState({
      ...state,
      logged: true,
    });
  };

  const singOut = () => {
    setState({
      ...state,
      logged: false,
    });
  };

  localStorage.setItem('apim-logged', `${state.logged}`);

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
