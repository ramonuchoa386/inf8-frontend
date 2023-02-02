import styled, { css } from 'styled-components';
import { Button, Paragraph, Input, Spinner } from '../../atoms';
import { styledButton } from '../../atoms/button/style';

export const Text = styled(Paragraph)``;
export const CloseFormBtn = styled(Button)``;
export const UploadFile = styled(styledButton)``;
export const FileInput = styled(Input)``;
export const SendFileBtn = styled(Button)``;
export const Loader = styled(Spinner)``;

export const Modal = styled.div<{ show?: boolean }>((props) => {
  const { show = false } = props;

  return css`
    display: ${show ? 'block' : 'none'};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props.theme.colors.white};
    z-index: 100;
    padding: 24px;
    border-radius: ${props.theme.effects.borderRadius};
    box-shadow: ${props.theme.effects.boxShadow};
    min-width: 600px;
    opacity: ${show ? 1 : 0};
    transition: all 0.5s ease;
  `;
});

export const Form = styled.form(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  `
);

export const FormRow = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;
