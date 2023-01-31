import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItemLink = styled(Link)`
  color: ${(props) => props.theme.colors.Fuscous};

  &:hover {
    color: ${(props) => props.theme.colors.Cod};
    text-decoration: underline;
    font-weight: bold;
  }
`;

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

export const FormRow = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Form = styled.form(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  `
);

export const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Combobox = styled.select`
  color: ${(props) => props.theme.colors.Fuscous};
  border-radius: ${(props) => props.theme.effects.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.Cod};
  padding: 8px 12px 8px 4px;
`;
