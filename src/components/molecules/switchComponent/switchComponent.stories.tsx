import * as React from 'react';
import { Meta } from '@storybook/react';
import SwitchComponent from './';
// import theme from '../../../styles/theme';

export default {
  title: 'components/molecules/SwitchComponent',
  component: SwitchComponent,
  description: 'Componente boolean',
  // argTypes: {
  //   toggle: {
  //     name: 'Alterar',
  //     switchControl: 'boolean',
  //     description: 'Propriedade que altera o alinhamento do componente',
  //     defaultValue: false,
  //     type: { name: 'boolean', required: true },
  //     switchCable: {
  //       switchCype: { summary: 'boolean' },
  //       defaultValue: { summary: false },
  //     },
  //   },
  //   switchColor: {
  //     name: 'Cor',
  //     control: 'select',
  //     options: Object.keys(theme.colors).sort(),
  //     description: 'Cor do componente',
  //     defaultValue: 'pitchBlack',
  //     table: {
  //       type: { summary: 'text' },
  //       defaultValue: { summary: 'pitchBlack' },
  //     },
  //   },
  //   borderColor: {
  //     name: 'Cor',
  //     control: 'select',
  //     options: Object.keys(theme.colors).sort(),
  //     description: 'Cor do componente',
  //     defaultValue: 'pitchBlack',
  //     table: {
  //       type: { summary: 'text' },
  //       defaultValue: { summary: 'pitchBlack' },
  //     },
  //   },
  //   as: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   theme: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   ref: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   forwardedAs: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  // },
} as Meta;

const Template = (args) => <SwitchComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: ['True', 'False'],
};

export const ColoredLabels = Template.bind({});
ColoredLabels.args = {
  labels: ['Ying', 'Yang'],
  labelColor: 'Coral',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  labels: ['Been Evil', 'Been Good'],
  disabled: true,
};
