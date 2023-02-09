import React from 'react';

import { AuthContextProvider } from './auth';
import { SidebarContextProvider } from './sidebar/context';
import { ToasterContextProvider } from './toaster';
import { PopUpContextProvider } from './popup';
import { ModalContextProvider } from './modal';
import { UpdateContextProvider } from './updateList';

const GlobalContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthContextProvider>
      <UpdateContextProvider>
        <ModalContextProvider>
          <PopUpContextProvider>
            <ToasterContextProvider>
              <SidebarContextProvider>{children}</SidebarContextProvider>
            </ToasterContextProvider>
          </PopUpContextProvider>
        </ModalContextProvider>
      </UpdateContextProvider>
    </AuthContextProvider>
  );
};

export default GlobalContext;
