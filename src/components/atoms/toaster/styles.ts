import styled from 'styled-components';
import { IToasterContext } from '../../../context/toaster';
import { Button } from '../';

export const Toaster = styled.div<IToasterContext>`
  position: absolute;
  top: 10vh;
  right: ${(props) => (props.toast ? '0' : '-100%')};
  border-radius: 4px 0px 0px 4px;
  background-color: ${(props) => props.theme.colors[props.severity]};
  padding: 16px 64px 16px 16px;
  color: white;
  transition: all 0.6s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  margin-right: 16px;
`;

export const ToasterBtn = styled(Button)`
  padding: 4px;
  margin-left: 16px;
`;
