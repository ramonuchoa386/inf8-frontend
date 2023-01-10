import styled, { css } from 'styled-components';
import { Button as CustomButton } from '../../atoms';
import { Input as I } from '../../atoms';
import { Button as B } from '../../atoms';

export const inputTextWrapper = styled.div<{
  visible?: boolean;
}>`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Modal = styled.div<{
  visible: boolean;
}>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  border: 1px solid black;
  border-radius: 5px;
  position: absolute;
  top: calc(100% + 4px);
  background-color: white;
  padding: 5px;
  z-index: 1;
`;

export const ModalButton = styled(B)`
  width: 100%;
  transition: 0s;
  border: 0px;
  border-radius: 5px;
  font-weight: normal;
  &:hover {
    font-weight: bold;
  }
`;

export const Container = styled.div<{
  extendedOption?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &.ExtendedFilter {
    ${(props) =>
      props.extendedOption ? 'max-height 100px ;' : 'max-height: 0px;'}
    transition-duration: 1s;
    transition-property: max-height;
    overflow: hidden;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 5px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 4px;
  position: relative;
`;

export const Button = styled(CustomButton)``;

export const ButtonCard = styled(CustomButton)<{
  active?: boolean;
}>((props) => {
  const { active = false, buttonTheme = 'Cod' } = props;

  return css`
    padding: 8px;

    ${active &&
    `
      color: ${
        buttonTheme === 'primary' || buttonTheme === 'Green'
          ? props.theme.colors.Cod
          : props.theme.colors.white
      };
      background-color: ${props.theme.colors[buttonTheme]};
    `};
  `;
});

export const Input = styled(I)``;

export const ExtendendFilter = styled.div<{
  view: string;
}>`
  ${(props) =>
    props.view === 'true'
      ? `
  max-height: 100px;
  `
      : `
  max-height: 0px;
  `}
  display: flex;
  margin-top: 5px;
  transition-duration: 750ms;
  transition-property: max-height;
  overflow: hidden;
`;

export const ButtonFilter = styled(CustomButton)<{
  active: boolean;
}>`
  padding: 8px;

  ${(props) =>
    props.active &&
    `
    border: solid 1px ${props.theme.colors.Cod};
    transition: all 0.7s ease;
    color: #FFF;
    background-color: #191918;`};
`;

export const Filtros = styled(CustomButton)<{
  active?: boolean;
}>`
  padding: 8px;
  ${(props) =>
    props.active &&
    `transition: all 0.7s ease;
  color: #FFF;
  background-color: #191918;`};

  ${(props) =>
    !props.active &&
    `&:hover {
    border: solid 1px ${props.theme.colors.Cod};
    background-color: #fff !important;
    color: ${props.theme.colors.Cod} !important;
  }`}
`;
