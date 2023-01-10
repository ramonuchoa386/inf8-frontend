import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiHome, BiSitemap } from 'react-icons/bi';
import * as S from './styles';
import theme from '../../../styles/theme';

const SidebarContent = ({ iconSize = 17 }: { iconSize?: number }) => {
  return (
    <S.Main>
      <Menu iconShape='square'>
        <Menu>
          <MenuItem icon={<BiHome size={iconSize} />}>
            Home
            <Link to='/' title='Dashboard' color={theme.colors.white} />
          </MenuItem>
          <S.Division />
          <MenuItem icon={<BiSitemap size={iconSize} />}>
            APIs
            <Link to='/apis' title='Apis' />
          </MenuItem>
          <S.Division />
        </Menu>
      </Menu>
    </S.Main>
  );
};

export default SidebarContent;
