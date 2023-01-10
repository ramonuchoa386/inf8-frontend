import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tag } from '../../../components/atoms';

export const ListItemLink = styled(Link)`
  color: ${(props) => props.theme.colors.Fuscous};

  &:hover {
    color: ${(props) => props.theme.colors.Cod};
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const ApplicationTag = styled(Tag)``;
