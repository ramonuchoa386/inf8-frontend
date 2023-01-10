/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

interface IPopUpArgs {
  title?: string;
  content?: string;
  handleOk?: () => void;
}

export interface IPopUpContext extends IPopUpArgs {
  showPopUp: boolean;
}

export interface IPopUpContextProps {
  popUpState: IPopUpContext;
  setState: React.Dispatch<React.SetStateAction<IPopUpContext>>;
  showPopUp: (args: IPopUpArgs) => void;
  hidePopUp: () => void;
}

const INITIAL_STATE: IPopUpContextProps = {
  popUpState: {
    showPopUp: false,
    title: 'Popup Title',
    content: 'Popup Content',
    handleOk: () => console.log('Handle PopUp Ok'),
  },
  setState: () => {},
  hidePopUp: () => {},
  showPopUp: () => {},
};
const PopUpContext = createContext<IPopUpContextProps>(INITIAL_STATE);

const PopUpContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [popUpState, setState] = useState(INITIAL_STATE.popUpState);

  const showPopUp = (args: IPopUpArgs) => {
    setState({
      ...popUpState,
      showPopUp: true,
      title: args.title,
      content: args.content,
      handleOk: args.handleOk,
    });
  };

  const hidePopUp = () => {
    setState({
      ...popUpState,
      showPopUp: false,
    });
  };

  return (
    <PopUpContext.Provider
      value={{
        popUpState,
        setState,
        hidePopUp,
        showPopUp,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export { PopUpContextProvider };
export default PopUpContext;
