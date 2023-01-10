import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

export interface IDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  withShadow?: boolean;
  lineColor?: ColorPalette;
}

export const Divider = styled.hr<IDividerProps>((props) => {
  const { withShadow = false, lineColor = 'primary' } = props;

  return css`
    border-color: ${props.theme.colors[lineColor]};
    margin: 0;
    width: 100%;
    opacity: 1;

    ${withShadow &&
    `
      box-shadow: 0px 3px 15px ${props.theme.colors[lineColor]};
    `}
  `;
});
