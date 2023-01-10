import React from 'react';
import * as S from './style';

export interface FieldType {
  component?: React.ReactNode;
}

export interface FormInterface {
  fields: FieldType[];
  disabledDefaultSubmitButton?: boolean;
  preventDefault?: boolean;
  submitText?: string;
  onSubmit?: () => void;
}

const Form = (props: FormInterface) => {
  return (
    <S.Card>
      <S.FormContainer
        onSubmit={(e) => {
          if (props.onSubmit || props.preventDefault) {
            props.onSubmit ? props.onSubmit() : '';
            e.preventDefault();
            return false;
          }
        }}
      >
        {props.fields.map((field, key) => {
          return <div key={key}>{field.component}</div>;
        })}

        {!props.disabledDefaultSubmitButton && (
          <S.ButtonWrapper>
            <S.Button>{props.submitText || 'Submit'}</S.Button>
          </S.ButtonWrapper>
        )}
      </S.FormContainer>
    </S.Card>
  );
};

export default Form;
