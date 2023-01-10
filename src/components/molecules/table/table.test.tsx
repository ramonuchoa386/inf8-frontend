import React from 'react';
import {
  render,
  screen,
  within,
  rendererCreate,
  cleanup,
} from '../../../utils/test/test-utils';
import Table from './';
import { tableMockData } from './table.mocks';

describe('Table component tests', () => {
  afterEach(cleanup);

  test('should render a table', () => {
    render(<Table data={tableMockData} data-testid='table-test' />);

    const component = screen.getByTestId('table-test');

    expect(component).toBeInTheDocument();
    expect(component).toBeInstanceOf(HTMLTableElement);
  });

  test('should not render a table', () => {
    const { queryByTestId, getByText } = render(
      <Table data={{ headers: [], rows: [] }} data-testid='table-test' />
    );

    expect(queryByTestId('table-test')).not.toBeInTheDocument();
    expect(getByText('Nenhum dado para mostrar')).toBeInTheDocument();
    expect(getByText('Nenhum dado para mostrar')).toBeInstanceOf(
      HTMLParagraphElement
    );
  });

  describe('Table component structure tests', () => {
    test('should render a table headers and rows', () => {
      render(<Table data={tableMockData} data-testid='table-test' />);

      const component = screen.getByTestId('table-test');
      const { queryAllByRole } = within(component);
      const tableInnerElements = queryAllByRole('rowgroup');

      expect(tableInnerElements.length).toBe(2);

      tableInnerElements.forEach((item) => {
        expect(item).toBeInstanceOf(HTMLTableSectionElement);
      });
    });

    test('should render a correct table headers', () => {
      render(<Table data={tableMockData} data-testid='table-test' />);

      const component = screen.getByTestId('table-test');
      const { queryAllByRole } = within(component);
      const headers = within(queryAllByRole('rowgroup')[0]).getAllByRole(
        'columnheader'
      );

      expect(headers.length).toBe(6);

      headers.forEach((item) => {
        expect(item).toBeInstanceOf(HTMLTableCellElement);
      });
    });

    test('should render a correct table rows', () => {
      render(
        <Table
          data={tableMockData}
          loadingData={false}
          data-testid='table-test'
        />
      );

      const component = screen.getByTestId('table-test');
      const { queryAllByRole } = within(component);
      const rows = within(queryAllByRole('rowgroup')[1]).getAllByRole('row');

      expect(rows.length).toBe(6);

      rows.forEach((item) => {
        expect(item).toBeInstanceOf(HTMLTableRowElement);
      });
    });
  });

  describe('Table component styles tests', () => {
    test('should render correct styles for table component', () => {
      const component = rendererCreate(<Table data={tableMockData} />).toJSON();

      expect(component).toHaveStyleRule('width', '100%');
      expect(component).toHaveStyleRule('border-collapse', 'collapse');
      expect(component).toHaveStyleRule('font-size', '0.75rem');
    });

    test('should render correct columns sizes for table component', () => {
      const component = rendererCreate(
        <Table
          data={tableMockData}
          columnsSizes={['10%', '10%', '10%', '10%', '10%', '10%']}
        />
      ).toTree();

      const renderedProps = component?.props.children.props;

      expect('columnsSizes' in renderedProps).toBeTruthy();
      expect(renderedProps.columnsSizes.length).toBe(6);
    });
  });
});
