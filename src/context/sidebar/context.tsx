/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

type SidebarType = {
  collapsed: boolean;
};

type PropsSidebarContext = {
  state: SidebarType;
  setState: React.Dispatch<React.SetStateAction<SidebarType>>;
  collapse: () => void;
};

const DEFALUT_VALUE = {
  state: {
    collapsed: true,
  },
  setState: () => {},
  collapse: () => {},
};
const SidebarContext = createContext<PropsSidebarContext>(DEFALUT_VALUE);

const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(DEFALUT_VALUE.state);

  const collapse = () => {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        state,
        setState,
        collapse,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContextProvider };
export default SidebarContext;
