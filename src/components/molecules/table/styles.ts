import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.75rem;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.colors.celeste};
  }
`;

export const TableHead = styled.thead`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.Fuscous};
  text-transform: uppercase;
`;

export const TableBody = styled.tbody``;

export const TableHeadColumn = styled.th`
  text-align: left;
  padding: 8px;
`;

export const TableRowColumn = styled.td`
  padding: 8px;
`;

export const TableColGroup = styled.colgroup``;

interface IColGroupItem extends React.ColHTMLAttributes<HTMLElement> {
  size: string;
}

export const TableColGroupItem = styled.col<IColGroupItem>`
  width: ${(props) => props.size};
`;
