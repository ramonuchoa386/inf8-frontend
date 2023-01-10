import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApiDetailInfoDisplay from '.';
import { Tag } from '../../atoms';

export default {
  title: 'components/organisms/ApiDetailInfoDisplay',
  component: ApiDetailInfoDisplay,
  description: 'Controlador da lista em tabela ou card',
} as ComponentMeta<typeof ApiDetailInfoDisplay>;

const Template: ComponentStory<typeof ApiDetailInfoDisplay> = (args) => (
  <ApiDetailInfoDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {
  painel: [
    { title: 'STATE', text: 'ENABLED', type: 'healthCheck' },
    { title: 'TIPO', text: 'REST' },
    { title: 'VERSAO', text: '1.0.0' },
    { title: 'VISIBILIDADE', text: 'PUBLIC' },
    {
      title: 'ULTIMA MODIFICAÇÃO',
      text: 1592839766043,
      type: 'Date',
    },
  ],
  applications: {
    title: 'Application',
    text: 4,
  },
  painelInfo: [
    {
      title: 'Descrição',
      text: 'Descrição da API',
    },
    {
      title: 'Tag',
      text: <Tag>Tag</Tag>,
      tag: true,
    },
  ],
  painelSecondaryInfo: [
    {
      title: 'Assets',
      text: 'Loading',
    },
  ],
};
