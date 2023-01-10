import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  styledType?: 'default' | 'primary' | 'dark' | 'white';
  styledSize?: 'default' | 'large' | 'medium';
  text?: string;
}

const Button = ({
  text,
  styledType = 'default',
  styledSize = 'default',
  ...props
}: iButton) => {
  return (
    <S.styledButton styledType={styledType} styledSize={styledSize} {...props}>
      {text}
    </S.styledButton>
  );
};

export default Button;
