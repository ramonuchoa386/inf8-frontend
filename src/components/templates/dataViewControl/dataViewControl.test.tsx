import { render, fireEvent, within } from '../../../utils/test/test-utils';
import DataViewControl from '.';
import { cardListMock } from '../../organisms/cardsList/cardList.mock';
import { dataViewControlMockData } from './dataViewControl.mocks';

describe('DataViewControl component tests', () => {
  test('should match snapshot', () => {
    const page = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={(params) => console.log(params) as never}
        loading={false}
      />
    );

    expect(page).toMatchSnapshot();
  });

  test('DataViewControl component render tests', () => {
    const { getByTestId } = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={(params) => console.log(params) as never}
        data-testid='dataviewcontrol-test'
      />
    );

    const component = getByTestId('dataviewcontrol-test');

    expect(component).toBeInTheDocument();
    expect(component).toBeInstanceOf(HTMLElement);
  });

  test('DataViewControl component search input tests', () => {
    const mockHandleReq = jest.fn();

    const { getByRole } = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={() => mockHandleReq() as never}
      />
    );

    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockHandleReq).toBeCalledTimes(0);

    expect(input).toHaveValue('test');
  });

  test('DataViewControl component table length test', () => {
    const { getByTestId } = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={(params) => console.log(params) as never}
        loading={false}
        data-testid='datacontrol-test'
      />
    );

    const { getByRole } = within(getByTestId('datacontrol-test'));
    const table = within(getByRole('table'));
    const tableBody = table.getAllByRole('rowgroup')[1];
    const { getAllByRole } = within(tableBody);

    expect(getAllByRole('row').length).toBe(
      dataViewControlMockData.rows.length
    );
  });

  test('DataViewControl component view change test', () => {
    const { getByTestId } = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={(params) => console.log(params) as never}
        loading={false}
        data-testid='datacontrol-test'
      />
    );

    const { getAllByRole } = within(getByTestId('datacontrol-test'));

    fireEvent.click(getAllByRole('button')[1]);
  });

  test('DataViewControl component pagination test', () => {
    const mockHandleReq = jest.fn();

    const { getByTestId } = render(
      <DataViewControl
        qtdItems={48}
        tableData={dataViewControlMockData}
        cardData={cardListMock}
        handleRequest={() => mockHandleReq() as never}
        loading={false}
        data-testid='datacontrol-test'
      />
    );

    const { getAllByRole } = within(getByTestId('datacontrol-test'));

    fireEvent.click(getAllByRole('button')[6]);

    expect(mockHandleReq).toBeCalledTimes(1);
  });
});
