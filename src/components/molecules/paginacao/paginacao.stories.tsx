import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paginacao from '.';

export default {
  title: 'components/molecules/Paginacao',
  component: Paginacao,
  description: 'Controlador da lista em tabela ou card',
  argTypes: {
    optionQtdItems: {
      name: 'Lista de items por página',
      description:
        'Lista com a quantidade de items por página deve aparecer nas opções',
      defaultValue: [12, 24, 36],
      control: 'object',
    },
    qtdPag: {
      name: 'Páginas',
      description: 'Quantidade de páginas',
      control: 'number',
      defaultValue: 7,
    },
    actualPage: {
      name: 'Pagina atual',
      description: 'Pagina atual',
      control: 'number',
      defaultValue: 1,
    },
    selectedOptPage: {
      name: 'Items por página selecionado',
      description: 'Quantidade de items por página selecionado',
      control: 'number',
      defaultValue: 12,
    },
    setQtdItems: {
      name: 'Escolher items por página',
      description: 'Função que escolhe quantos items irão aparecer por página',
      defaultValue: (e) => window.alert(e) as never,
    },
    setPage: {
      name: 'Escolher página',
      description: 'Função que escolhe a página',
      defaultValue: (e) => window.alert(e) as never,
    },
  },
} as ComponentMeta<typeof Paginacao>;

const Template: ComponentStory<typeof Paginacao> = (args) => (
  <Paginacao {...args} />
);

export const Default = Template.bind({});
