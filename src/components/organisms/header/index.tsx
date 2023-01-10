import React, { useContext } from 'react';
import AuthContext from '../../../context/auth';
import { HeaderInfoUser } from '../../molecules';

// Styles
import * as S from './styles';

// Components

const Header = ({ onlyMobile = false }: S.HeaderProps) => {
  const { state } = useContext(AuthContext);

  return (
    <S.Main data-testid='HeaderID' onlyMobile={onlyMobile}>
      <S.Box>
        <span>Está Logado? {JSON.stringify(state.logged)}</span>
        <HeaderInfoUser />
      </S.Box>
    </S.Main>
  );
};

export default Header;
