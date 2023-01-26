import React, { ButtonHTMLAttributes } from 'react';
import * as S from './style';

const Button: React.FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement> & S.IStyledButton
> = (props) => {
  const {
    children,
    buttonTheme = 'Cod',
    borderLess = false,
    rounded = false,
    ...rest
  } = props;

  return (
    <S.styledButton
      buttonTheme={buttonTheme}
      borderLess={borderLess}
      rounded={rounded}
      {...rest}
    >
      {children}
    </S.styledButton>
  );
};

export default Button;
