/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

interface IModalContextProps {
  modalState: boolean;
  toggleModalState: () => void;
}

const INITIAL_STATE: IModalContextProps = {
  modalState: false,
  toggleModalState: () => {},
};

const ModalContext = createContext<IModalContextProps>(INITIAL_STATE);

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalState, setModalState] = useState(INITIAL_STATE.modalState);

  const toggleModalState = () => {
    setModalState((curreentState) => !curreentState);
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        toggleModalState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider };
export default ModalContext;
