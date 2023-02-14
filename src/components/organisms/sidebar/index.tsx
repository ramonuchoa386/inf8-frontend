import React, { useContext } from 'react';
import { ProSidebar } from 'react-pro-sidebar';
import { VtalSmall, Logo } from '../../../assets/logos';
import SidebarContext from '../../../context/sidebar/context';
import * as S from './styles';

const Sidebar = () => {
  const { state, collapse } = useContext(SidebarContext);

  return (
    <S.Main data-testid='sidebar-testid'>
      <ProSidebar onToggle={collapse} collapsed={state.collapsed}>
        <S.Header>
          <S.HeaderLogoLink to='/portal'>
            {state.collapsed ? <VtalSmall /> : <Logo />}
          </S.HeaderLogoLink>
        </S.Header>
        <S.HeaderDivider />

        <S.SidebarContentArea />

        <S.SideFooter>
          <div onClick={collapse}>
            <S.SidebarCollapseIcon
              color='primary'
              size='18px'
              iconName={
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
