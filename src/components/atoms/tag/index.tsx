import React from 'react';
import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

interface ITagProps {
  borderColor?: ColorPalette;
}

const Tag = styled.div<ITagProps>((props) => {
  const { color = 'Cod', borderColor } = props;

  return css`
    font-size: 12px;
    border-radius: 50px;
    padding: 2px 12px;
    display: inline;

    ${color !== 'transparent' &&
    `
      background-color: ${props.theme.colors[color as ColorPalette]};
      color: ${
        ['primary', 'Green', 'transparent'].includes(color)
          ? props.theme.colors.Cod
          : props.theme.colors.white
      };
    `}

    ${color === 'transparent' &&
    borderColor !== undefined &&
    `
      border: 1px solid ${props.theme.colors[borderColor]};
      color: ${props.theme.colors[borderColor]};
    `}
  `;
});

export default Tag;
