import { ReactNode } from 'react';

interface ITableCell {
  value: string | ReactNode;
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
