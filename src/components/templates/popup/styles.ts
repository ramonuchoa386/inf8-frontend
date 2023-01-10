import styled, { css } from 'styled-components';
import { Button, Card } from '../../atoms';

export interface IPopUpWrapper {
  showPopUp: boolean;
}

export const PopUpWrapper = styled.section<IPopUpWrapper>((props) => {
  const { showPopUp } = props;

  return css`
    display: ${showPopUp ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: ${props.theme.colors.Cod + '77'};
    position: fixed;
    height: 100vh;
  `;
});

export const PopUpInner = styled(Card)`
  background-color: ${(props) => props.theme.colors.white};
  max-width: 50%;
`;

export const PopUpTitle = styled.h3``;

export const PopUpContent = styled.p`
  padding: 8px 0px;
  margin: 8px 0px 16px;
  border-top: 1px solid ${(props) => props.theme.colors.celeste};
  border-bottom: 1px solid ${(props) => props.theme.colors.celeste};
`;

export const PopUpBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PopUpCloseBtn = styled(Button)``;
export const PopUpOKBtn = styled(Button)``;
