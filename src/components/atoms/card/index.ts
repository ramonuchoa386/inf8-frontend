import styled from 'styled-components';

export const Card = styled.div`
  border-radius: ${(props) => props.theme.effects.borderRadius};
  box-shadow: ${(props) => props.theme.effects.boxShadow};
  padding: 16px;
`;
