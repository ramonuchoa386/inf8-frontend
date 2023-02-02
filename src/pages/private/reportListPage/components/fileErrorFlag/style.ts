import styled from 'styled-components';
import { BiMessageRoundedError } from 'react-icons/bi';

export const FlagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ErrorIcon = styled(BiMessageRoundedError)`
  color: ${(props) => props.theme.colors.negative};
`;
