import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import extendedFilterOptions, { ExtendedFilterOptionsParams } from '.';
import ExtendedFilterOptions from '.';

export default {
  title: 'components/molecules/extendedFilterOptions',
  component: extendedFilterOptions,
  description:
    'Renderiza e retorna a quantidade de campos conforme parametrização',
  argTypes: {
    params: {
      control: {} as ExtendedFilterOptionsParams,
      description: 'Parâmetros de entrada do componente',
    },
    callBack: {
      description:
        'Função de call back do componente que retorna os campos no mesmo type do params com o campo value atualizado.',
    },
  },
} as ComponentMeta<typeof ExtendedFilterOptions>;

const argsTs: ExtendedFilterOptionsParams = {
  params: [
    {
      fieldName: 'fieldName',
      fieldType: 'input',
      placeHolder: 'placeHolder',
      label: 'label',
      value: '',
    },
    {
      fieldName: 'fieldName2',
      fieldType: 'list',
      placeHolder: 'placeHolder',
      label: 'label',
      listParams: {
        listItems: ['Selecionar', 'item1', 'item2'],
        listItemDefault: 'Selecionar',
      },
    },
  ],

  callBack: (e) => alert(JSON.stringify(e)),
};

const Template: ComponentStory<typeof ExtendedFilterOptions> = (args) => (
  <div>
    <ExtendedFilterOptions {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...argsTs,
};
