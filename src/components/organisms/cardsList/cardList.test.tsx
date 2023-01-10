import React from 'react';
import { render, rendererCreate } from '../../../utils/test/test-utils';
import CardList from '.';
import { cardListMock } from './cardList.mock';

describe('CardList component tests', () => {
  describe('component render test', () => {
    test('should render a CardList component', () => {
      const tree = render(
        <CardList data={cardListMock} data-testid='cardlist-test' />
      );

      const component = tree.getByTestId('cardlist-test');

      expect(component).toBeInTheDocument();
      expect(component).toBeInstanceOf(HTMLElement);
    });
  });

  describe('component content test', () => {
    test('should render correct number of items in a list', () => {
      const tree = render(<CardList data={cardListMock} loadingData={false} />);

      const list = tree.queryAllByRole('link');

      expect(list[0]).toBeInstanceOf(HTMLAnchorElement);
      expect(list.length).toBe(6);
    });
  });

  describe('component styles test', () => {
    test('should render a CardList component default styles', () => {
      const component = rendererCreate(
        <CardList data={cardListMock} />
      ).toJSON();

      expect(component).toHaveStyleRule('display', 'inline-flex');
      expect(component).toHaveStyleRule('flex-wrap', 'wrap');
      expect(component).toHaveStyleRule('gap', '1.6rem');
    });

    test('should render a CardList component custom styles', () => {
      const component = rendererCreate(
        <CardList data={cardListMock} cardSize='250px' space='45px' />
      ).toJSON();

      expect(component).toHaveStyleRule('gap', '45px');
    });
  });
});
