import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

export interface DividerProps {
  color?: string;
  height?: number;
}

const Divider = styled.hr<DividerProps>(
  ({ color = theme.colors.primary, height = 1 }) => css`
    box-shadow: 0px 3px 15px ${color};
    border: ${height}px solid;
    border-color: ${color};
    opacity: 1;
    margin: 0;
  `
);
export default Divider;
