import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

export interface IToggleComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  toggle: boolean;
  borderColor?: ColorPalette;
  switchColor?: ColorPalette;
}

export const ToggleComponent = styled.div<IToggleComponentProps>((props) => {
  const { toggle, borderColor = 'Cod', switchColor = 'Cod' } = props;

  return css`
    border: 1px solid ${props.theme.colors[borderColor]};
    width: 30px;
    height: 16px;
    border-radius: calc(100 * ${props.theme.effects.borderRadius});
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${toggle ? 'flex-start' : 'flex-end'};
    padding: 2px;

    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: ${props.theme.colors[switchColor]};
      border-radius: calc(100 * ${props.theme.effects.borderRadius});
    }
  `;
});
