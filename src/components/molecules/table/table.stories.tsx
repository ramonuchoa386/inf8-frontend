import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '.';
import { tableMockData } from './table.mocks';

export default {
  title: 'components/molecules/Table',
  component: Table,
  argTypes: {
    data: {
      name: 'Dados',
      description: 'JSON com os dados a serem exibidos na tabela.',
      control: 'object',
      table: {
        type: {
          summary: 'object',
          required: true,
        },
      },
    },
    columnsSizes: {
      name: 'Largura das colunas',
      description: 'Lista com as larguras das colunas da tabela.',
      control: 'object',
      table: {
        type: {
          summary: 'array',
        },
      },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: tableMockData,
};

export const WithColumnsSizes = Template.bind({});
WithColumnsSizes.args = {
  data: tableMockData,
  columnsSizes: ['10%', '25%', '10%', '25%', '15%', '15%'],
};
