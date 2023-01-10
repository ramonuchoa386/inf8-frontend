import { ITableData } from '../../molecules/table/table.interface';
import { tableMockData } from '../../molecules/table/table.mocks';

export const dataViewControlMockData: ITableData = {
  headers: tableMockData.headers,
  rows: Array.from({ length: 12 }, (element, index) => {
    return {
      id: index + 1,
      cell: [
        {
          value: 'Lorem Ipsum',
        },
        {
          value: 'Lorem Ipsum',
        },
        {
          value: 'Lorem Ipsum',
        },
        {
          value: 'Lorem Ipsum',
        },
        {
          value: 'Lorem Ipsum',
        },
        {
          value: 'Lorem Ipsum',
        },
      ],
    };
  }),
};
