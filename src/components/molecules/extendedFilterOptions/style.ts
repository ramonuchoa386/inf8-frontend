import styled from 'styled-components';
import { Button as AtomBtn, Input } from '../../atoms';
import DropList from '../droplist';

export const Container = styled.div`
  display: flex;
  gap: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputText = styled(Input)``;

export const List = styled(DropList)`
  padding: 8px 12px;
`;

export const label = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
`;

export const Button = styled(AtomBtn)``;
