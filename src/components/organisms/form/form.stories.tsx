import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Form from '.';

export default {
  title: 'components/organisms/Form',
  component: Form,
  argTypes: {
    fields: {
      name: 'Componentes ReactNode',
      type: { name: 'array', required: true },
      description: 'Lista de componentes a serem exibidos no formulário',
      defaultValue: [
        {
          component: (
            <>
              <p>Meu campo personalizado</p>
              <input type={'text'} />
            </>
          ),
        },
      ],
    },
    disabledDefaultSubmitButton: {
      name: 'Desabilitar o botão submit default do componente',
      description:
        'Utilize esta opção para desativar o botão padrão de "submit" do Form',
      type: { name: 'boolean', required: false },
    },
    preventDefault: {
      name: 'Prevenir ação default do form',
      description:
        'Utilize esta opção para evitar que o Form execute um callback ao ser executado alguma ação dentro do formulário',
      type: { name: 'boolean', required: false },
    },
    submitText: {
      name: 'Texto do botão padrão do formulário',
      description:
        'Utilize essa propriedade para modificar o texto do botão padrão do Form.',
      type: { name: 'string', required: false },
    },
    onSubmit: {
      name: 'Callback do Form',
      description:
        'Utilize essa propriedade para configurar um callback costumizado para o Form.',
      type: { name: 'function', required: false },
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <div style={{ width: '100%' }}>
    <Form {...args} />
  </div>
);

export const Default = Template.bind({});
const MeuComponentePersonalizado = () => {
  return (
    <>
      <div style={{ marginBottom: '8px' }}>
        <p style={{ fontWeight: 'bold' }}>Meu Componente personalizado</p>
        <input type={'text'} />
      </div>
    </>
  );
};
Default.args = {
  fields: [
    {
      component: <MeuComponentePersonalizado />,
    },
  ],
  preventDefault: true,
};

export const ExemploTrocaDeSenha = Template.bind({});

ExemploTrocaDeSenha.args = {
  fields: [],
  preventDefault: true,
  disabledDefaultSubmitButton: true,
};
