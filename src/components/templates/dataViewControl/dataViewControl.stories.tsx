import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DataViewControl from './';
import { cardListMock } from '../../organisms/cardsList/cardList.mock';
import { dataViewControlMockData } from './dataViewControl.mocks';

export default {
  title: 'components/templates/DataViewControl',
  component: DataViewControl,
} as ComponentMeta<typeof DataViewControl>;

const Template: ComponentStory<typeof DataViewControl> = (args) => (
  <DataViewControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  qtdItems: 48,
  tableData: dataViewControlMockData,
  cardData: cardListMock,
  handleRequest: (params) => console.log(params) as never,
  loading: false,
};
