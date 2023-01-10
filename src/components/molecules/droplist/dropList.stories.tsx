import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropList from '.';

export default {
  title: 'components/molecules/DropList',
  component: DropList,
  description: 'Controlador da lista em tabela ou card',
  argTypes: {
    items: {
      name: 'Items',
      description: 'Items da listya',
      defaultValue: [],
      control: 'object',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: [],
        },
      },
    },
    setItem: {
      name: 'Função de escolher o item',
      description: 'Função que controla o intem escolhido dentro do combobox',
      defaultValue: (e) => window.alert(e),
    },
    selected: {
      name: 'Item selecionado',
      description: 'Parametro que configura o item selecionado no combobox',
      control: 'number',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
  },
} as ComponentMeta<typeof DropList>;

const Template: ComponentStory<typeof DropList> = (args) => (
  <DropList {...args} />
);

export const Default = Template.bind({});
