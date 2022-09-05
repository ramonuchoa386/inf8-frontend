import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

// style
import * as S from './styles';
import theme from '../../../styles/theme';

// Components
import Icon from '../../atoms/icon';

const SidebarContent = () => {
  return (
    <S.Main>
      <Menu iconShape='square'>
        <Menu>
          <MenuItem icon={<Icon name='Dashboard' color={theme.colors.white} />}>
            Dashboard
            <Link to='/' title='Dashboard' color={theme.colors.white} />
          </MenuItem>
          <MenuItem icon={<Icon name='Apis' color={theme.colors.white} />}>
            Apis
            <Link to='/apis' title='Apis' />
          </MenuItem>
          <MenuItem icon={<Icon name='Cwp' color={theme.colors.white} />}>
            CWP
            <Link to='/cwp' title='Cwp' />
          </MenuItem>
          <MenuItem icon={<Icon name='KeyOtk' color={theme.colors.white} />}>
            OTK
            <Link to='/otk' title='Otk' />
          </MenuItem>
          <MenuItem icon={<Icon name='logs' color={theme.colors.white} />}>
            Logs
            <Link to='/logs' title='Logs' />
          </MenuItem>
        </Menu>
      </Menu>
    </S.Main>
  );
};

export default SidebarContent;
