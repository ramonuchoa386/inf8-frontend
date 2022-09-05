import styled from 'styled-components';

import { SidebarContent } from 'react-pro-sidebar';

export const Main = styled(SidebarContent)`
  overflow-y: auto;
  margin-bottom: 20px;
  background: ${(props) => props.theme.colors.baseGray.Cod};

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #191918;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .pro-menu.square {
    padding-top: inherit;
    .pro-menu-item {
      & > .pro-inner-item {
        padding-top: inherit;
        padding-bottom: inherit;
        height: 60px;
        & > .pro-icon-wrapper {
          background-color: initial;
        }
      }
    }
  }
`;
