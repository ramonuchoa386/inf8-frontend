import styled, { css } from 'styled-components';
import { Button } from '../../atoms';
import DropList from '../droplist';

interface IPaginacaoBtn {
  activePage?: boolean;
}

export const Paginacao = styled(Button)<IPaginacaoBtn>((props) => {
  const { activePage = false } = props;

  return css`
    color: ${activePage ? props.theme.colors.Cod : props.theme.colors.ironside};

    ${activePage &&
    `
    font-weight: bold;
    `}

    &:hover {
      color: ${props.theme.colors.Cod};
      background-color: initial;
    }
  `;
});

export const Etc = styled.div`
  color: ${(props) => props.theme.colors.delta};
`;

export const Container = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 16px;
  gap: 4px;
`;

interface IPaginacaoButtonWrapper
  extends React.HTMLAttributes<HTMLSpanElement> {
  show: boolean;
}

export const PaginacaoButtonWrapper = styled.span<IPaginacaoButtonWrapper>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;

export const ItemsPorPaginaWrapper = styled.div`
  margin: 0px;
  select {
    max-width: fit-content;
  }
`;

export const Drop = styled(DropList)``;
