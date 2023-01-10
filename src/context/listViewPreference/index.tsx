/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

export type ViewPreferenceType = 'list' | 'card';
export type ViewPreferenceOption = 'true' | 'false';

interface IFavViewContextProps {
  viewPreferenceState: ViewPreferenceType;
  viewPreferenceOption: ViewPreferenceOption;
  toggleViewPreference: (args: ViewPreferenceType) => void;
  toggleViewOption: () => void;
}

const INITIAL_STATE: IFavViewContextProps = {
  viewPreferenceState:
    (localStorage.getItem('@vtal/apihub/view') as ViewPreferenceType) || 'list',
  viewPreferenceOption:
    (localStorage.getItem('@vtal/apihub/option') as ViewPreferenceOption) ||
    'false',
  toggleViewPreference: () => {},
  toggleViewOption: () => {},
};

const FavViewContext = createContext<IFavViewContextProps>(INITIAL_STATE);

const FavViewContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [viewPreferenceState, setViewPreference] = useState<ViewPreferenceType>(
    INITIAL_STATE.viewPreferenceState
  );
  const [viewPreferenceOption, setViewPreferenceOption] =
    useState<ViewPreferenceOption>(INITIAL_STATE.viewPreferenceOption);

  const toggleViewOption = () => {
    const option = viewPreferenceOption;
    if (option === 'true') {
      localStorage.setItem('@vtal/apihub/option', 'false');
      setViewPreferenceOption('false');
    } else {
      localStorage.setItem('@vtal/apihub/option', 'true');
      setViewPreferenceOption('true');
    }
  };

  const toggleViewPreference = (view: ViewPreferenceType) => {
    localStorage.setItem('@vtal/apihub/view', view);
    setViewPreference(view);
  };

  return (
    <FavViewContext.Provider
      value={{
        viewPreferenceState,
        toggleViewPreference,
        viewPreferenceOption,
        toggleViewOption,
      }}
    >
      {children}
    </FavViewContext.Provider>
  );
};

export { FavViewContextProvider };
export default FavViewContext;
