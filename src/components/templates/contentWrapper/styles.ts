import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 48px 20px 64px;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.tablet}) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: ${(props) =>
      props.theme.layout.breakpoints.desktopLarge}) {
    padding-left: 75px;
    padding-right: 75px;
    overflow: scroll;
    height: 100%;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: 'transparent';
    }
    &::-webkit-scrollbar-thumb {
      border-radius: calc(100 * ${(props) => props.theme.effects.borderRadius});
      background: ${(props) => props.theme.colors.Fuscous};
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.Cod};
    }
  }
`;
