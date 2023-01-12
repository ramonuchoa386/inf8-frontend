import React, { useContext, useEffect } from 'react';
import ToasterContext from '../../../context/toaster';
import * as S from './styles';
import { BiX } from 'react-icons/bi';

export interface IToasterProps {
  withBtn?: boolean;
  withIcon?: boolean;
}

const Toaster: React.FunctionComponent<IToasterProps> = (props) => {
  const { withBtn = false, withIcon = false, ...rest } = props;
  const { toasterState, hideToaster } = useContext(ToasterContext);

  useEffect(() => {
    if (toasterState.toast) {
      setTimeout(() => hideToaster(), 5000);
    }
  }, [toasterState.toast, hideToaster]);

  return (
    <S.Toaster
      severity={toasterState.severity}
      toast={toasterState.toast}
      {...rest}
    >
      {withIcon && <S.IconWrapper>{toasterState.icon}</S.IconWrapper>}
      {toasterState.message}
      {withBtn && (
        <S.ToasterBtn onClick={() => hideToaster()} buttonTheme='white'>
          <BiX size='12px' />
        </S.ToasterBtn>
      )}
    </S.Toaster>
  );
};

export default Toaster;
