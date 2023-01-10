import React from 'react';

import { AuthContextProvider } from './auth';
import { FavViewContextProvider } from './listViewPreference';
import { SidebarContextProvider } from './sidebar/context';
import { ToasterContextProvider } from './toaster';
import { PopUpContextProvider } from './popup';
import { LastPageContextProvider } from './lastPage';

const GlobalContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LastPageContextProvider>
      <PopUpContextProvider>
        <ToasterContextProvider>
          <AuthContextProvider>
            <SidebarContextProvider>
              <FavViewContextProvider>{children}</FavViewContextProvider>
            </SidebarContextProvider>
          </AuthContextProvider>
        </ToasterContextProvider>
      </PopUpContextProvider>
    </LastPageContextProvider>
  );
};

export default GlobalContext;
