import styled, { css } from 'styled-components';
import { Card, Tag, Status, Icon } from '../../atoms';

const CardListSection = styled.section`
  &:not(:last-of-type) {
    padding-bottom: 8px;
    border-bottom: 1px solid ${(props) => props.theme.colors.celeste};
    margin-bottom: 8px;
  }
`;

export const CardListStatus = styled(Status)``;
export const CardListIntelIcon = styled(Icon)``;
export const CardListTopSection = styled(CardListSection)``;

export const CardListItem = styled(Card)`
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 3px 5px rgb(60 60 60 / 50%);
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
`;

export const CardTitle = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const CardListMeta = styled.p`
  display: inline-block;
  font-size: 0.625rem;
`;

export const CardListDescriptionSection = styled(CardListSection)`
  font-size: 0.75rem;
  min-height: calc(3 * 0.75rem);
  max-height: calc(3 * 0.75rem);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: 'transparent';
  }
  &::-webkit-scrollbar-thumb {
    border-radius: calc(100 * ${(props) => props.theme.effects.borderRadius});
    background: ${(props) => props.theme.colors.celeste};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.delta};
  }
`;

export const CardListInfoSection = styled(CardListSection)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

export const CardListTag = styled(Tag)`
  white-space: nowrap;

  &:not(:last-of-type) {
    margin-right: 4px;
  }
`;

export const CardListIntelText = styled.p`
  font-size: 0.75rem;
  margin-left: 4px;
`;

export const CardListIntelRow = styled.section<{ show?: boolean }>((props) => {
  const { show = false } = props;

  return css`
    display: ${show ? 'flex' : 'none'};
    align-items: center;
  `;
});

export const CardListIntelTagRow = styled(CardListIntelRow)`
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: 'transparent';
  }
  &::-webkit-scrollbar-thumb {
    border-radius: calc(100 * ${(props) => props.theme.effects.borderRadius});
    background: ${(props) => props.theme.colors.celeste};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.delta};
  }
`;

export const CardListIntelExtraRow = styled(CardListIntelRow)`
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: auto;
`;

export const CardListIntelRowItem = styled.section`
  width: 50%;
  display: flex;
  align-items: center;

  &:nth-of-type(n + 3) {
    margin-top: 4px;
  }

  &:nth-of-type(even) {
    justify-content: flex-end;
  }
`;
