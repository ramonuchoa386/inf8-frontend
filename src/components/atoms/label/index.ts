import React from 'react';
import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';

interface IFieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  fixed?: boolean;
}

export const FieldLabel = styled.label<IFieldLabelProps>((props) => {
  const { fixed = false, color = 'Cod' } = props;

  return css`
    font-size: 0.625rem;

    ${fixed &&
    `
            position: absolute;
            left: 0px;
            bottom: -16px;
        `}

    color: ${props.theme.colors[color as ColorPalette]};
  `;
});
