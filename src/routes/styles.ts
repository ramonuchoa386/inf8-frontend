import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (min-width: ${(props) =>
      props.theme.layout.breakpoints.desktop}) {
    height: 100vh;
  }
`;
