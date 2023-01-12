import React, { useContext } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiHome, BiCloudUpload } from 'react-icons/bi';
import * as S from './styles';
import theme from '../../../styles/theme';
import validateUserPermissions from '../../../utils/permissions';
import { Permissions } from '../../../utils/permissions';
import AuthContext from '../../../context/auth';

const SidebarContent = ({ iconSize = 17 }: { iconSize?: number }) => {
  const { state } = useContext(AuthContext);

  return (
    <S.Main>
      <Menu iconShape='square'>
        <Menu>
          <MenuItem icon={<BiHome size={iconSize} />}>
            Home
            <Link to='/' title='Dashboard' color={theme.colors.white} />
          </MenuItem>
          <S.Division />
          {validateUserPermissions(state.profile, Permissions['VIEW']) && (
            <>
              <MenuItem icon={<BiCloudUpload size={iconSize} />}>
                Relatório de envio
                <Link to='/relatorio-de-envio' title='Relatório de envio' />
              </MenuItem>
              <S.Division />
            </>
          )}
        </Menu>
      </Menu>
    </S.Main>
  );
};

export default SidebarContent;
