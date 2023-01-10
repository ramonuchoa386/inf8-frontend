import React from 'react';
import * as S from './styles';
import { ApplicationStatusText } from '../../../utils/enums';

const Status: React.FunctionComponent<S.IStatusProps> = (props) => {
  const { status, size = 'short', ...rest } = props;

  return (
    <S.Status {...rest} size={size} status={status}>
      {ApplicationStatusText[status]}
    </S.Status>
  );
};

export default Status;
