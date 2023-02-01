import React from 'react';

import { AuthContextProvider } from './auth';
import { SidebarContextProvider } from './sidebar/context';
import { ToasterContextProvider } from './toaster';
import { PopUpContextProvider } from './popup';
import { ModalContextProvider } from './modal';

const GlobalContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <PopUpContextProvider>
          <ToasterContextProvider>
            <SidebarContextProvider>{children}</SidebarContextProvider>
          </ToasterContextProvider>
        </PopUpContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
};

export default GlobalContext;
