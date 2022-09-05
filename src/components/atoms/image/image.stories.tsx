import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImagemTeste from './../../../assets/logos/logo.svg';

import Image from './';

export default {
  title: 'components/atoms/Image',
  component: Image,
  argTypes: {
    src: {
      description: 'Caminho da imagem',
      type: { name: 'string', required: true },
      defaultValue: ImagemTeste,
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: ImagemTeste },
      },
    },
    alt: {
      description: 'Texto alternativo',
      type: { name: 'string', required: true },
      defaultValue: 'Texto alternativo',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Texto alternativo' },
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
