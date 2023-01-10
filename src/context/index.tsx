import React from 'react';

import { AuthContextProvider } from './auth';
import { SidebarContextProvider } from './sidebar/context';

const GlobalContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthContextProvider>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </AuthContextProvider>
  );
};

export default GlobalContext;
