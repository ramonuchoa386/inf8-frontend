import React from 'react';
import { Link } from 'react-router-dom';

// style
import * as S from './styles';

// components
import { Divider } from '../../atoms';

const SidebarHeader = ({ logo, altImg }: { logo: any; altImg: string }) => {
  return (
    <React.Fragment>
      <S.Header>
        <Link to='/'>
          <S.LogoWrapper src={logo} alt={altImg} />
        </Link>
      </S.Header>
      <Divider />
    </React.Fragment>
  );
};

export default SidebarHeader;
