import styled, { css, keyframes } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

interface ISpinnerProps {
  spinnerColor?: ColorPalette;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span<ISpinnerProps>((props) => {
  const { spinnerColor = 'celeste' } = props;

  return css`
    display: block;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid ${props.theme.colors[spinnerColor]};
    border-bottom-color: transparent;
    animation: ${rotate} 1s linear infinite;
  `;
});
