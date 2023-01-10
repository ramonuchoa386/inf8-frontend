import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

export interface IStyledButton {
  buttonTheme?: ColorPalette;
  borderLess?: boolean;
}

export const styledButton = styled.button<IStyledButton>((props) => {
  const { buttonTheme = 'Cod', borderLess = false } = props;

  return css`
    border: ${borderLess
      ? `none`
      : `1px solid ${props.theme.colors[buttonTheme]}`};

    cursor: pointer;
    color: ${props.theme.colors[buttonTheme]};
    background-color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    padding: ${borderLess ? '8px' : '8px 16px'};
    border-radius: calc(100 * ${props.theme.effects.borderRadius});
    font-size: 10px;
    transition: all 0.3s ease;

    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;

    &:hover {
      transition: all 0.7s ease;
      color: ${(props) =>
        buttonTheme === 'primary' ||
        buttonTheme === 'Green' ||
        buttonTheme === 'white'
          ? props.theme.colors.Cod
          : props.theme.colors.white};
      background-color: ${props.theme.colors[buttonTheme]};

      svg {
        color: ${(props) =>
          buttonTheme === 'primary' ||
          buttonTheme === 'Green' ||
          buttonTheme === 'white'
            ? props.theme.colors.Cod
            : props.theme.colors.white};
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: ${props.theme.colors.celeste};
      border-color: ${props.theme.colors.celeste};

      &:hover {
        background-color: transparent;
      }
    }
  `;
});
