import styled from 'styled-components';
import Theme from '../../../styles/theme';

const themeBtn = {
  default: {
    border: Theme.colors.baseSecondary.Coral,
    color: Theme.colors.baseSecondary.Coral,
    hover: {
      color: Theme.colors.white,
      backgroundColor: Theme.colors.baseSecondary.Coral,
    },
  },
  primary: {
    border: Theme.colors.primary,
    color: Theme.colors.primary,
    hover: {
      color: Theme.colors.baseGray.Fuscous,
      backgroundColor: Theme.colors.primary,
    },
  },
  dark: {
    border: Theme.colors.baseGray.Cod,
    color: Theme.colors.baseGray.Cod,
    hover: {
      color: Theme.colors.white,
      backgroundColor: Theme.colors.baseGray.Cod,
    },
  },
  white: {
    border: Theme.colors.white,
    color: Theme.colors.white,
    hover: {
      color: Theme.colors.baseGray.Cod,
      backgroundColor: Theme.colors.white,
    },
  },
} as any;

const sizeBtn = {
  default: {
    width: 'fit-content',
    height: 'fit-content',
  },
  large: {
    width: '260px',
    height: '40px',
  },
  medium: {
    width: '180px',
    height: '40px',
  },
} as any;

export const styledButton = styled.button<{
  styledType: string;
  styledSize: string;
}>`
  border: 1px solid ${(props) => themeBtn[props.styledType].border};
  color: ${(props) => themeBtn[props.styledType].color};
  width: ${(props) => sizeBtn[props.styledSize].width};
  height: ${(props) => sizeBtn[props.styledSize].height};
  background-color: transparent;
  text-decoration: none;
  font-weight: bold;
  padding: 3px 9px;
  border-radius: 100px;
  display: inline-block;
  font-size: 14px;
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.7s ease;
    color: ${(props) => themeBtn[props.styledType].hover.color};
    background-color: ${(props) =>
      themeBtn[props.styledType].hover.backgroundColor};
  }

  &:not(:last-of-type) {
    margin-right: 12px;
  }
`;
