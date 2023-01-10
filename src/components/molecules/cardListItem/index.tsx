import React from 'react';
import { BoxIconsType, StatusType } from '../../../utils/types';
import * as S from './styles';

type ExtraIntel = {
  icon: BoxIconsType;
  intel: string;
};

export interface ICardListItemProps {
  title: string;
  description: string;
  status: StatusType;
  meta?: string[];
  tag?: string[];
  extraIntel?: ExtraIntel[];
}

const CardListItem: React.FC<ICardListItemProps> = (props) => {
  const { title, status, meta, description, tag, extraIntel, ...rest } = props;

  return (
    <S.CardListItem {...rest}>
      <S.CardListTopSection>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardListStatus status={status} />
        {meta !== undefined &&
          meta.length > 0 &&
          meta.map((meta, index) => {
            return (
              <S.CardListMeta
                key={meta.toLowerCase().replace(' ', '') + '-' + index}
              >
                &nbsp;|&nbsp;{meta}
              </S.CardListMeta>
            );
          })}
      </S.CardListTopSection>
      <S.CardListDescriptionSection>{description}</S.CardListDescriptionSection>
      {(tag !== undefined || extraIntel !== undefined) && (
        <S.CardListInfoSection>
          <S.CardListIntelTagRow show={tag !== undefined && tag.length > 0}>
            {tag !== undefined &&
              tag.length > 0 &&
              tag.map((tag, index) => {
                return (
                  <S.CardListTag
                    key={tag.toLowerCase().replace(' ', '') + '-' + index}
                  >
                    {tag}
                  </S.CardListTag>
                );
              })}
          </S.CardListIntelTagRow>

          <S.CardListIntelExtraRow
            show={extraIntel !== undefined && extraIntel.length > 0}
          >
            {extraIntel !== undefined &&
              extraIntel.length > 0 &&
              extraIntel.map((intel: ExtraIntel, index) => {
                return (
                  <S.CardListIntelRowItem
                    key={
                      intel.intel.toLowerCase().replace(' ', '') + '-' + index
                    }
                  >
                    <S.CardListIntelIcon size='12px' iconName={intel.icon} />
                    <S.CardListIntelText>{intel.intel}</S.CardListIntelText>
                  </S.CardListIntelRowItem>
                );
              })}
          </S.CardListIntelExtraRow>
        </S.CardListInfoSection>
      )}
    </S.CardListItem>
  );
};

export default CardListItem;
