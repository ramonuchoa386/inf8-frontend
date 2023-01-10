import React, { useContext } from 'react';
import * as S from './styles';
import PopUpContext from '../../../context/popup';

const PopUp: React.FunctionComponent = (props) => {
  const { popUpState, hidePopUp } = useContext(PopUpContext);
  const { title, content, showPopUp, handleOk } = popUpState;

  return (
    <S.PopUpWrapper showPopUp={showPopUp} {...props}>
      <S.PopUpInner>
        <S.PopUpTitle>{title}</S.PopUpTitle>
        <S.PopUpContent>{content}</S.PopUpContent>

        <S.PopUpBtnWrapper>
          <S.PopUpCloseBtn onClick={() => hidePopUp()} buttonTheme='negative'>
            Cancelar
          </S.PopUpCloseBtn>
          <S.PopUpOKBtn onClick={handleOk} buttonTheme='positive'>
            OK
          </S.PopUpOKBtn>
        </S.PopUpBtnWrapper>
      </S.PopUpInner>
    </S.PopUpWrapper>
  );
};

export default PopUp;
