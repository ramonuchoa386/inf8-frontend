import styled, { css } from 'styled-components';
import { ApplicationStatusColor } from '../../../utils/enums';
import { StatusType } from '../../../utils/types';

enum BulletSize {
  short = '8px',
  big = '12px',
}

export interface IStatusProps {
  status: StatusType;
  size?: keyof typeof BulletSize;
}

export const Status = styled.p<IStatusProps>((props) => {
  const { status, size = 'short' } = props;

  return css`
    display: inline-block;
    color: ${props.theme.colors[ApplicationStatusColor[status]]};
    font-size: ${size === 'short' ? '12px' : '16px'};

    ${size === 'big' &&
    `
      font-weight: bold;
    `}

    &:before {
      content: '';
      display: inline-block;
      margin-right: 4px;

      background-color: ${props.theme.colors[ApplicationStatusColor[status]]};
      width: ${BulletSize[size]};
      height: ${BulletSize[size]};
      border-radius: calc(100 * ${props.theme.effects.borderRadius});
    }
  `;
});
