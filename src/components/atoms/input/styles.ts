import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';
import { FieldLabel } from '../label';
import Icon from '../icon';
import { IInput } from '.';

interface ITextInputWrapper {
  showIcon?: boolean;
}

export const TextInputWrapper = styled.div<ITextInputWrapper>((props) => {
  const { showIcon = false } = props;

  return css`
    display: flex;
    flex-direction: column;

    ${showIcon && `position: relative;`}
  `;
});

export const TextInputLabel = styled(FieldLabel)``;

export const TextInputIconWrapper = styled.div<IInput>((props) => {
  const { label } = props;

  return css`
    position: absolute;
    right: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${label ? 'calc(1px + 0.625rem)' : '0px'} 8px 0px;
  `;
});

export const TextInputIcon = styled(Icon)``;

export interface ITextInput {
  inputTheme?: ColorPalette;
}

export const TextInput = styled.input<ITextInput>((props) => {
  const { inputTheme = 'Cod' } = props;

  return css`
    width: 100%;
    padding: 12px 8px;
    color: ${props.theme.colors.Fuscous};
    border-radius: ${props.theme.effects.borderRadius};
    border: 1px solid ${props.theme.colors[inputTheme]};

    &::placeholder {
      color: ${props.theme.colors.delta};
    }

    &:invalid {
      border-color: ${props.theme.colors.negative};
    }

    &:focus {
      outline: none;
      box-shadow: ${props.theme.effects.boxShadow};
    }
  `;
});
