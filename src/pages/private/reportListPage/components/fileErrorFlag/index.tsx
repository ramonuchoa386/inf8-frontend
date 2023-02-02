import React from 'react';
import * as S from './style';

interface IFileErrorFlag {
  status: string;
  detail: string;
}

const FileErrorFlag: React.FunctionComponent<IFileErrorFlag> = (props) => {
  const { status, detail } = props;

  return (
    <S.FlagWrapper>
      {status}
      <S.ErrorIcon title={detail} />
    </S.FlagWrapper>
  );
};

export default FileErrorFlag;
