import React from 'react';
import { render, rendererCreate } from '../../../utils/test/test-utils';
import CardListItem from './';

describe('CardListItem component tests', () => {
  describe('component render test', () => {
    test('should render a CardListItem component', () => {
      const tree = render(
        <CardListItem
          title='title test'
          status='DISABLED'
          description='description test'
          data-testid='cardlistitem-test'
        />
      );

      const component = tree.getByTestId('cardlistitem-test');

      expect(component).toBeInTheDocument();
      expect(component).toHaveTextContent('title test');
      expect(component).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('component content test', () => {
    test('should render a CardListItem component with default content', () => {
      const tree = render(
        <CardListItem
          title='Card test title'
          status='ENABLED'
          description='Card test description'
          data-testid='cardlistitem-test'
        />
      );

      const component = tree.getByTestId('cardlistitem-test');

      expect(component).toHaveTextContent('Card test title');
      expect(component).toHaveTextContent('Disponível');
      expect(component).toHaveTextContent('Card test description');
    });

    test('should render a CardListItem component with content and metadata', () => {
      const tree = render(
        <CardListItem
          title='Card metadata test title'
          status='DEPRECATED'
          meta={['REST', 'v1.5.7']}
          description='Card metadata test description'
          data-testid='cardlistitem-test'
        />
      );

      const component = tree.getByTestId('cardlistitem-test');

      expect(component).toHaveTextContent('Card metadata test title');
      expect(component).toHaveTextContent('REST');
      expect(component).toHaveTextContent('v1.5.7');
      expect(component).toHaveTextContent('Depreciada');
      expect(component).toHaveTextContent('Card metadata test description');
    });

    test('should render a CardListItem component with content, metadata and tag', () => {
      const tree = render(
        <CardListItem
          title='Card tag test title'
          status='REJECTED'
          meta={['REST', 'v1.5.7']}
          tag={['Test tag']}
          description='Card tag test description'
          data-testid='cardlistitem-test'
        />
      );

      const component = tree.getByTestId('cardlistitem-test');

      expect(component).toHaveTextContent('Card tag test title');
      expect(component).toHaveTextContent('REST');
      expect(component).toHaveTextContent('v1.5.7');
      expect(component).toHaveTextContent('Rejeitado');
      expect(component).toHaveTextContent('Card tag test description');
      expect(component).toHaveTextContent('Test tag');
    });

    test('should render a CardListItem component with content, metadata, tag and intel', () => {
      const tree = render(
        <CardListItem
          title='Card tag test title'
          status='DEPRECATED'
          description='Card tag test description'
          meta={['REST', 'v1.5.7']}
          tag={['Test tag']}
          extraIntel={[{ icon: 'BiRocket', intel: 'Intel test' }]}
          data-testid='cardlistitem-test'
        />
      );

      const component = tree.getByTestId('cardlistitem-test');

      expect(component).toHaveTextContent('Card tag test title');
      expect(component).toHaveTextContent('REST');
      expect(component).toHaveTextContent('v1.5.7');
      expect(component).toHaveTextContent('Depreciada');
      expect(component).toHaveTextContent('Card tag test description');
      expect(component).toHaveTextContent('Test tag');
      expect(component).toHaveTextContent('Intel test');
    });
  });

  describe('component styles test', () => {
    test('should render a CardListItem component default styles', () => {
      const component = rendererCreate(
        <CardListItem
          title='title test'
          status='DISABLED'
          description='description test'
        />
      ).toJSON();

      expect(component).toHaveStyleRule('padding', '16px');
      expect(component).toHaveStyleRule('transform', 'translateY(-10px)', {
        modifier: ':hover',
      });
    });
  });
});
