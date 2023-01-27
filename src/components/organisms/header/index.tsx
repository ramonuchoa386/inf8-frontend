import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import AuthContext from '../../../context/auth';
import * as S from './styles';

const Header: React.FunctionComponent = (props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { state, signOut } = useContext(AuthContext);
  const [toggleBox, setToggleBox] = useState(false);
  const [headerOffset, setHeaderOffset] = useState<string>('');

  const getHeaderOffset = useCallback(
    (el: Element) => setHeaderOffset(() => el.getBoundingClientRect().x + 'px'),
    [setHeaderOffset]
  );

  useEffect(() => {
    headerRef.current && getHeaderOffset(headerRef.current);
  }, [headerRef, getHeaderOffset]);

  return (
    <S.Main ref={headerRef} {...props}>
      <S.AvatarWrapper>
        <S.HeaderIcon iconName='BiUserCircle' />
        <S.AvatarText weight='bold' size='small'>
          Portal do Administrador
        </S.AvatarText>
        <S.ToggleBtn
          borderLess
          onClick={() => setToggleBox((current) => !current)}
        >
          {!toggleBox ? <BiChevronDown /> : <BiChevronUp />}
        </S.ToggleBtn>
      </S.AvatarWrapper>
      <S.BoxWrapper offsetAmount={headerOffset} toggle={toggleBox}>
        <S.BoxRow>
          <S.Avatar />
          <S.BoxColumn>
            <S.UserName>Olá, {state.userName}</S.UserName>
            <S.UserProfile weight='bold'>perfil: {state.profile}</S.UserProfile>
          </S.BoxColumn>
        </S.BoxRow>

        <S.BoxRow style={{ justifyContent: 'space-between' }}>
          <S.LogOutBtn buttonTheme='Coral' onClick={signOut} borderLess>
            Sair
          </S.LogOutBtn>
        </S.BoxRow>
      </S.BoxWrapper>
    </S.Main>
  );
};

export default Header;
