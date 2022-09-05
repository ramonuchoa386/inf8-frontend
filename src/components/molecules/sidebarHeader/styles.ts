import styled from 'styled-components';
import { SidebarHeader } from 'react-pro-sidebar';
import { Image } from '../../atoms';

export const Header = styled(SidebarHeader)`
  padding: 24px 20px;
  text-align: center;
`;

export const LogoWrapper = styled(Image)`
  color: ${(props) => props.theme.colors.white};
`;
