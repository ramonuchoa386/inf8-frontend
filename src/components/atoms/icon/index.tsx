import React from 'react';
import * as BoxIcons from 'react-icons/bi';
import theme, { ColorPalette } from '../../../styles/theme';
import { BoxIconsType } from '../../../utils/types';
import SVGIcons, { TypeIcons } from './../../../assets/icons/';

export interface IIconProps {
  iconName?: BoxIconsType | TypeIcons;
  size?: string;
  color?: ColorPalette;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const {
    iconName = 'BiAbacus',
    size = '12px',
    color = 'Cod',
    ...rest
  } = props;

  let I;

  if (iconName in BoxIcons) {
    I = BoxIcons[iconName as BoxIconsType];
  } else {
    I = SVGIcons[iconName as TypeIcons];
  }

  return (
    <I
      color={theme.colors[color]}
      size={size}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export default Icon;
