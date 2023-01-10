import styled, { css } from 'styled-components';

export interface ParagraphProps {
  size?: 'small' | 'normal' | 'large';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
}

enum WeightEnum {
  light = '300',
  normal = '400',
  bold = '900',
}

const handleFontSize = (size: string | undefined) => {
  switch (size) {
    case 'small':
      return '0.875rem';
    case 'normal':
      return '1rem';
    case 'large':
      return '1.125rem';
    default:
      return '1rem';
  }
};

const lineHeightBySIze = (size?: string) => {
  switch (size) {
    case 'small':
      return '1.125rem';
    case 'normal':
      return '1.25rem';
    case 'large':
      return '1.375rem';
    default:
      return '1.25rem';
  }
};

const P = styled.p<ParagraphProps>(
  ({ size = '', weight = 'normal', ...props }) => css`
    font-size: ${handleFontSize(size)};
    line-height: ${lineHeightBySIze(size)};
    font-family: ${props.theme.fontFamily.Inter};
    font-weight: ${WeightEnum[weight]};
    color: ${props.color || props.theme.colors.Fuscous};
  `
);

export default P;
