import React, { useContext } from 'react';
import { ProSidebar } from 'react-pro-sidebar';

// syles
import * as S from './styles';
import theme from '../../../styles/theme';

// Images
import { VtalSmall, Logo } from './../../../assets/logos/';

// context
import SidebarContext from '../../../context/sidebar/context';

// Components
import { SidebarHeader, SidebarContent } from '../../molecules';
import Icon from '../../atoms/icon';

const Sidebar = () => {
  const { state, collapse } = useContext(SidebarContext);

  return (
    <S.Main data-testid='sidebar-testid'>
      <ProSidebar onToggle={collapse} collapsed={state.collapsed}>
        <SidebarHeader
          logo={state.collapsed ? VtalSmall : Logo}
          altImg='APIM'
        />

        <SidebarContent />

        <S.SideFooter>
          <div onClick={collapse}>
            <Icon
              color={theme.colors.primary}
              name={
                state.collapsed ? 'ArrowCollapsedright' : 'ArrowCollapsedLeft'
              }
            />
          </div>
        </S.SideFooter>
      </ProSidebar>
    </S.Main>
  );
};

export default Sidebar;
