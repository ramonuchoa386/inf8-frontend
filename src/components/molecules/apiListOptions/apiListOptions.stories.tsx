import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApiListOptions from '.';

export default {
  title: 'components/molecules/ApiListOptions',
  component: ApiListOptions,
  description: 'Controlador da lista em tabela ou card',
  argTypes: {
    setFieldSearchValue: {
      name: 'Função inserir termo de busca',
      description: 'Função que controla o valor inserido no campo de busca.',
      defaultValue: (e) => window.alert(e) as never,
    },
    triggerSearch: {
      name: 'Função disparar a busca',
      description:
        'Função que controla o disparo da busca com o valor inserido no campo.',
      defaultValue: (e) => window.alert(e) as never,
    },
  },
} as ComponentMeta<typeof ApiListOptions>;

const Template: ComponentStory<typeof ApiListOptions> = (args) => (
  <ApiListOptions {...args} />
);

export const Default = Template.bind({});
