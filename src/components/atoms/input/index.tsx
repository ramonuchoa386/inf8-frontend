import React from 'react';
import { IIconProps } from '../icon';
import * as S from './styles';

export interface IInput
  extends S.ITextInput,
    Pick<IIconProps, 'iconName'>,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FunctionComponent<IInput> = (props) => {
  const { inputTheme, label, iconName, id, ...rest } = props;

  return (
    <S.TextInputWrapper showIcon={!!iconName}>
      {!!label && <S.TextInputLabel htmlFor={id}>{label}</S.TextInputLabel>}
      <S.TextInput id={id} inputTheme={inputTheme} {...rest} />
      {!!iconName && (
        <S.TextInputIconWrapper label={label}>
          <S.TextInputIcon size='16px' iconName={iconName} />
        </S.TextInputIconWrapper>
      )}
    </S.TextInputWrapper>
  );
};

export default Input;
