import { SidebarFooter } from 'react-pro-sidebar';
import styled from 'styled-components';

export const Main = styled.div`
  .pro-sidebar {
    color: ${(props) => props.theme.colors.white};
    height: 100vh;
    font-family: ${(props) => props.theme.fontFamily.Inter};

    .pro-sidebar-inner {
      background: ${(props) => props.theme.colors.baseGray.Cod};
    }
    .react-slidedown {
      border-left: 2px solid ${(props) => props.theme.colors.primary};
    }
    .pro-sidebar-footer {
      border: none !important;
      padding-left: 20px;
      color: ${(props) => props.theme.colors.baseGray.celeste};
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
