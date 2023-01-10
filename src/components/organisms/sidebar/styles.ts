import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Divider, Icon } from '../../atoms';

import { SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import { SidebarContent } from '../../molecules';

export const SidebarContentArea = styled(SidebarContent)``;
export const SidebarCollapseIcon = styled(Icon)``;

export const Main = styled.div`
  .pro-sidebar {
    color: ${(props) => props.theme.colors.white};
    height: 100vh;
    font-family: ${(props) => props.theme.fontFamily.Inter};

    .pro-sidebar-inner {
      background: ${(props) => props.theme.colors.Cod};
    }
    .react-slidedown {
      border-left: 2px solid ${(props) => props.theme.colors.primary};
    }
    .pro-sidebar-footer {
      border: none !important;
      padding-left: 20px;
      color: ${(props) => props.theme.colors.celeste};
      font-size: 13px;
      > div {
        cursor: pointer;
      }
    }
  }
`;

export const SideFooter = styled(SidebarFooter)`
  font-size: 13px;
  margin-bottom: 1rem;
`;

export const Header = styled(SidebarHeader)`
  padding: 24px 20px;
  text-align: center;
  height: 118px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.img`
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderDivider = styled(Divider)``;
export const HeaderLogoLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
  }
`;
