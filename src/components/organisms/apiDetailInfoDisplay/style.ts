import styled from 'styled-components';
import { Card as C, Status } from '../../atoms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  table {
    height: 100%;
    width: 100%;
  }

  td {
    padding: 0px;
    border: 1px solid ${(props) => props.theme.colors.celeste};
  }

  td:last-child {
    width: 40%;
  }
`;

export const Card = styled(C)`
  padding: 0px;
  display: flex;
  width: 100%;
`;

export const InfoDisplay = styled.div<{
  column?: boolean;
}>`
  display: flex;
  max-height: 270px;
  flex-wrap: wrap;
  height: 100%;
  ${(props) => props.column && `flex-direction: column;`}

  width: 100%;
  padding: 5px 0px;
  &:first-child {
    padding-left: 0px;
  }
`;

export const BodyDisplayWrapper = styled.div`
  padding: 32px;
`;

export const bodyTitle = styled.h4`
  font-weight: bold;
`;

export const bodyDescription = styled.div<{
  tag?: boolean;
}>`
  ${(props) => props.tag && `font-size: 12px;`}
  color: ${(props) => props.theme.colors.Fuscous};
  display: inline-flex;
  column-gap: 5px;
`;

export const Title = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.delta};
`;

export const Main = styled.div`
  margin-left: 32px;
`;

export const HealthCheck = styled(Status)`
  margin-top: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: bold;

  div {
    margin-top: 8px;
  }
`;
