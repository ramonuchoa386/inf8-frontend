import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardList from './';
import { cardListMock } from './cardList.mock';

export default {
  title: 'components/organisms/CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: 'Card 1',
      status: 'ENABLED',
      description: 'Card 1',
    },
    {
      title: 'Card 2',
      status: 'ENABLED',
      description: 'Card 2',
    },
    {
      title: 'Card 3',
      status: 'ENABLED',
      description: 'Card 3',
    },
    {
      title: 'Card 4',
      status: 'ENABLED',
      description: 'Card 4',
    },
    {
      title: 'Card 5',
      status: 'ENABLED',
      description: 'Card 5',
    },
    {
      title: 'Card 6',
      status: 'ENABLED',
      description: 'Card 6',
    },
  ],
};

export const MoreContent = Template.bind({});
MoreContent.args = {
  data: cardListMock,
};

export const ItemsPerRowConfig = Template.bind({});
ItemsPerRowConfig.args = {
  data: cardListMock,
  itemsPerRow: 3,
};

export const CardSizeConfig = Template.bind({});
CardSizeConfig.args = {
  data: cardListMock,
  itemsPerRow: 3,
  cardSize: '250px',
};

export const SpaceConfig = Template.bind({});
SpaceConfig.args = {
  data: cardListMock,
  itemsPerRow: 3,
  cardSize: '250px',
  space: '50px',
};
