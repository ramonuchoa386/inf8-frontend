import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  Button,
  Paragraph,
  Avatar as AvatarAtom,
  Icon,
  Card,
} from '../../atoms';

export const Main = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.celeste};
  padding: 16px 20px;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.tablet}) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: ${(props) => props.theme.layout.breakpoints.desktop}) {
    padding-left: 48px;
    padding-right: 80px;
  }
`;

export const AvatarWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;
export const HeaderIcon = styled(Icon)``;
export const AvatarText = styled(Paragraph)``;
export const ToggleBtn = styled(Button)``;
export const ToggleBtnIcon = styled(Icon)``;
export const ActiveOrgIcon = styled(Icon)``;

interface IBoxWrapper extends React.HTMLAttributes<HTMLDivElement> {
  toggle: boolean;
  offsetAmount: string;
}

export const BoxWrapper = styled(Card)<IBoxWrapper>((props) => {
  const { toggle, offsetAmount } = props;

  return css`
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    transition: all 1s ease;
    z-index: 2;
    right: ${offsetAmount};
    top: ${toggle ? '100%' : '0'};
    visibility: ${toggle ? 'visible' : 'hidden'};
    opacity: ${toggle ? '1' : '0'};
    background-color: ${props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.Mauve};
  `;
});

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.Cod};
  }
`;

export const Avatar = styled(AvatarAtom)``;

export const BoxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  width: 100%;

  &:first-of-type {
    border-bottom: 1px solid ${(props) => props.theme.colors.celeste};
  }
`;
export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileBTN = styled(Button)``;
export const LogOutBtn = styled(Button)``;
export const UserName = styled(Paragraph)``;
export const UserProfile = styled(Paragraph)`
  font-size: 12px;
`;

export const OrgSectionTitle = styled(Paragraph)`
  color: ${(props) => props.theme.colors.delta};
`;
export const OrgName = styled(Paragraph)<{ active?: boolean }>((props) => {
  const { active = false } = props;

  return css`
    margin-top: 4px;
    cursor: pointer;

    &:hover {
      color: ${props.theme.colors.Cod};
    }

    ${!active &&
    `
    color: ${props.theme.colors.celeste}
  `}
  `;
});
export const OrgListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
