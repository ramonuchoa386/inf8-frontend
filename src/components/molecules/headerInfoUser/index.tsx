import React, { useContext } from 'react';
import AuthContext from '../../../context/auth';
import { Button } from '../../atoms';

import * as S from './styles';

const HeaderInfoUser = () => {
  const { singOut, singIn, state } = useContext(AuthContext);
  return (
    <S.Main>
      <Button
        text={`${state.logged ? 'Sair' : 'Entrar'}`}
        onClick={state.logged ? singOut : singIn}
      />
    </S.Main>
  );
};

export default HeaderInfoUser;
