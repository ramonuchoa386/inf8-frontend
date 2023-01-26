import React, { useContext } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiCloudUpload } from 'react-icons/bi';
import * as S from './styles';
import validateUserPermissions from '../../../utils/permissions';
import { Permissions } from '../../../utils/permissions';
import AuthContext from '../../../context/auth';

const SidebarContent = ({ iconSize = 17 }: { iconSize?: number }) => {
  const { state } = useContext(AuthContext);

  return (
    <S.Main>
      <Menu iconShape='square'>
        <Menu>
          {validateUserPermissions(state.profile, Permissions['VIEW']) && (
            <>
              <MenuItem icon={<BiCloudUpload size={iconSize} />}>
                Relatório de envio
                <Link to='/' title='Relatório de envio' />
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
