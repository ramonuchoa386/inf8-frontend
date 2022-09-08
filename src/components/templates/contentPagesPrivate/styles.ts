import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.desktop}) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px 20px 65px;
  height: 100vh;

  code {
    color: ${(props) => props.theme.colors.baseSecondary.Coral};
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.tablet}) {
    padding: 50px 60px 65px;
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.desktopLarge}) {
    padding: 50px 75px 65px;
  }

  h3 {
    margin-bottom: 10px;
  }

  h5,
  h6 {
    margin: 20px 0px 10px;
  }
`;

export const Box = styled.div`
  width: 100%;

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.tablet}) {
    overflow-y: auto;
  }
`;
