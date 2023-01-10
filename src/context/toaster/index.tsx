/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';
import { BiLike } from 'react-icons/bi';

interface IMessageSetterArgs {
  message?: string;
  severity: 'positive' | 'negative' | 'warning';
  icon?: React.ReactNode;
}
export interface IToasterContext extends IMessageSetterArgs {
  toast: boolean;
}

export interface IToasterContextProps {
  toasterState: IToasterContext;
  setState: React.Dispatch<React.SetStateAction<IToasterContext>>;
  showToaster: (args: IMessageSetterArgs) => void;
  hideToaster: () => void;
}

const INITIAL_STATE: IToasterContextProps = {
  toasterState: {
    toast: false,
    severity: 'positive',
    message: 'Bem-vindo ao Portal APIM da V.tal',
    icon: <BiLike />,
  },
  setState: () => {},
  hideToaster: () => {},
  showToaster: () => {},
};
const ToasterContext = createContext<IToasterContextProps>(INITIAL_STATE);

const ToasterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasterState, setState] = useState(INITIAL_STATE.toasterState);

  const showToaster = (args: IMessageSetterArgs) => {
    setState({
      ...toasterState,
      toast: true,
      message: args.message,
      severity: args.severity,
      icon: args.icon,
    });
  };

  const hideToaster = () => {
    setState({
      ...toasterState,
      toast: false,
    });
  };

  return (
    <ToasterContext.Provider
      value={{
        toasterState,
        setState,
        hideToaster,
        showToaster,
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
};

export { ToasterContextProvider };
export default ToasterContext;
