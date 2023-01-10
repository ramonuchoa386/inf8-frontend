import { ReactNode } from 'react';

interface ITableCell {
  value: string | ReactNode;
}

interface ITableHeader {
  id: number;
  value: string;
}

interface ITableRow {
  id: number;
  cell: ITableCell[];
}

export interface ITableData {
  headers: ITableHeader[];
  rows: ITableRow[];
}

export interface ITableProps {
  data: ITableData;
  columnsSizes?: string[];
}
