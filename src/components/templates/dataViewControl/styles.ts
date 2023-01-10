import styled from 'styled-components';
import { Paginacao as Paginate, ApiListOptions, Table } from '../../molecules';
import { CardsList } from '../../organisms';

export const DataViewControlWrapper = styled.section``;
export const DataControlComponent = styled(ApiListOptions)`
  margin-bottom: 15px;
`;
export const DataListCardView = styled(CardsList)``;
export const DataListTableView = styled(Table)``;
export const Paginacao = styled(Paginate)``;
