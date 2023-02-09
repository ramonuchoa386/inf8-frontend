/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

export interface IUpdateListContext {
  shouldUpdate: boolean;
  update: () => void;
}

const INITIAL_STATE: IUpdateListContext = {
  shouldUpdate: false,
  update: () => {},
};
const UpdateContext = createContext<IUpdateListContext>(INITIAL_STATE);

const UpdateContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [updateState, setUpdateState] = useState(INITIAL_STATE.shouldUpdate);

  const update = () => {
    setUpdateState((current) => !current);
  };

  return (
    <UpdateContext.Provider
      value={{
        shouldUpdate: updateState,
        update,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export { UpdateContextProvider };
export default UpdateContext;
