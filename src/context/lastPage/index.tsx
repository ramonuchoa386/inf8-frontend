/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, PropsWithChildren, useState } from 'react';

interface PropsLastPageContext {
  lastPage: string;
  setPage: (page: string) => void;
}

const storedLastPage = sessionStorage.getItem('@vtal/apihub/lastPage');

const INITIAL_STATE: PropsLastPageContext = {
  lastPage: storedLastPage !== null ? storedLastPage : '',
  setPage: () => {},
};

const LastPageContext = createContext<PropsLastPageContext>(INITIAL_STATE);

const LastPageContextProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [lastPage, setLastPage] = useState<string>(INITIAL_STATE.lastPage);

  const setPage = async (page: string) => {
    sessionStorage.setItem('@vtal/apihub/lastPage', page);
    setLastPage(() => page);
  };

  return (
    <LastPageContext.Provider
      value={{
        lastPage,
        setPage,
      }}
    >
      {children}
    </LastPageContext.Provider>
  );
};

export { LastPageContextProvider };
export default LastPageContext;
