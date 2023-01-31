import styled, { keyframes } from 'styled-components';
import { Button, Icon, Toaster } from '../../../components/atoms';
import { LogoNegative } from '../../../assets/logos';

export const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.tablet}) {
    padding: 60px 0px;
    max-width: 320px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${(props) => props.theme.layout.breakpoints.desktop}) {
    right: 124px;
    left: unset;
    transform: unset;
  }
`;

export const LogoWrapper = styled(LogoNegative)`
  width: 150px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.desktop}) {
    margin: 0;
  }
`;

export const LoginForm = styled.form`
  margin-top: auto;
  margin-bottom: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.tablet}) {
    align-items: center;
  }

  @media (min-width: ${(props) => props.theme.layout.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

export const LoginFormInput = styled.input`
  margin-bottom: 8px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 10px 25px;
  color: ${(props) => props.theme.colors.white};

  &:active,
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const rotateLoader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const MiniLoader = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.colors.Coral};
  border-bottom-color: transparent;
  animation: ${rotateLoader} 2s ease infinite;
`;

export const LoginFormBtn = styled(Button)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.layout.breakpoints.tablet}) {
    width: 50%;
  }

  &:hover {
    ${MiniLoader} {
      border-color: white;
      border-bottom-color: transparent;
    }
  }
`;

export const LoginToaster = styled(Toaster)``;
export const LoginPageIcon = styled(Icon)``;
