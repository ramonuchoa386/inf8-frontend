import { ReactNode } from 'react';

export interface ITableCell {
  value: string | ReactNode | JSX.Element;
}

export interface ITableHeader {
  id: number;
  value: string;
}

export interface ITableRow {
  id: number;
  cell: ITableCell[];
}

export interface ITableData {
  headers: ITableHeader[];
  rows: ITableRow[];
}

export interface ITableProps {
  data: ITableData;
  loadingData?: boolean;
  columnsSizes?: string[];
}
