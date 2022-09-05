import styled, { css } from 'styled-components';
import { Image } from '../../atoms';

export const HeaderImage = styled(Image)`
  width: 150px;
  margin: 0 auto;
`;

export interface HeaderProps {
  onlyMobile?: boolean;
}

export const Main = styled.div<HeaderProps>`
  ${(props) =>
    props.onlyMobile &&
    css`
      display: none;
      opacity: 0;
      @media only screen and (max-width: ${props.theme.layout.breakpoints
          .tablet}) {
        display: block;
      }
    `}

  width: 100%;
  background-color: ${(props) => props.theme.colors.baseGray.celeste};
  padding: 17px 20px;
  transition: all 0.4s ease-in-out;
  height: 54px;

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.tablet}) {
    padding: 17px 60px;
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.desktopLarge}) {
    padding: 17px 75px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
