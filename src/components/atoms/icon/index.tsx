import React from 'react';
import SVGIcons, { TypeIcons } from './../../../assets/icons/';

export interface IconProps {
  onClick?: () => void;
  name: TypeIcons | undefined;
  size?: string;
  color?: string;
}

const Icon = ({ onClick, name, size = '24px', color = '#000' }: IconProps) => {
  if (!name || !SVGIcons[name]) return null;

  const I = SVGIcons[name];

  const formatProps = {
    fontSize: size,
    color,
  };
  return <I data-testid='svgicon' onClick={onClick} {...formatProps} />;
};

export default Icon;
