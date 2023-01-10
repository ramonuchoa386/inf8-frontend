import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Option = styled.option``;

const themeInput = {
  default: {
    border: theme.colors.ironside,
    color: theme.colors.ironside,
  },
  required: {
    color: theme.colors.negative,
    border: theme.colors.negative,
  },
  valid: {
    color: theme.colors.ironside,
    border: theme.colors.positive,
  },
  disabled: {
    border: theme.colors.celeste,
    color: theme.colors.celeste,
  },
  small: {
    width: '160px',
  },
  large: {
    width: '320px',
  },
} as any;

export const Select = styled.select<{
  styledType: string;
  styledSize: string;
}>`
  color: ${(props) => themeInput[props.styledType].color};
  border-radius: ${theme.effects.borderRadius};
  border-color: ${(props) => themeInput[props.styledType].border};
  border-width: 1px;
  border-style: solid;
  width: ${(props) => themeInput[props.styledSize].width};
  height: 43px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => themeInput[props.styledType].color};
  }
  :-ms-input-placeholder {
    color: ${(props) => themeInput[props.styledType].color};
  }
  padding: 8px 12px 8px 4px;
`;
