import { Meta } from '@storybook/react/types-6-0';
import ResponsiveImage from './';
import mobileImg from '../../../assets/images/loginPage/login-page-bg-mobile.png';
import tabletImg from '../../../assets/images/loginPage/login-page-bg-tablet.png';
import desktopImg from '../../../assets/images/loginPage/login-page-bg-desktop.png';

export default {
  title: 'components/molecules/responsiveImage',
  component: ResponsiveImage,
  description: `Wrapper responsivo para images.`,
  argTypes: {
    altText: {
      name: 'altText',
      type: { name: 'string', required: true },
      defaultValue: 'Imagem de Teste',
      description: 'Texto alternativo da imagem',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Imagem de Teste' },
      },
    },
    mobileSrc: {
      name: 'mobileSrc',
      type: { name: 'string', required: true },
      defaultValue: mobileImg,
      description: 'Caminho da imagem para mobile',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: mobileImg },
      },
    },
    desktoptSrc: {
      name: 'desktoptSrc',
      type: { name: 'string', required: true },
      defaultValue: desktopImg,
      description: 'Caminho da imagem para desktop',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: desktopImg },
      },
    },
    tabletSrc: {
      name: 'tabletSrc',
      type: { name: 'string', required: true },
      defaultValue: tabletImg,
      description: 'Caminho da imagem para tablet',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: tabletImg },
      },
    },
  },
} as Meta;

export const Default = ResponsiveImage.bind({
  altText: 'Imagem teste',
  mobileSrc: mobileImg,
  desktopSrc: desktopImg,
  tabletSrc: tabletImg,
});
