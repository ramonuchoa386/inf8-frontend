import React from 'react';
import { ICardListItemProps } from '../../molecules/cardListItem';
import * as S from './styles';

export interface ICardsList extends ICardListItemProps {
  uuid: string;
}

interface ICardListProps extends S.IListWrapper, S.ICardSize {
  data: ICardsList[];
  loadingData?: boolean;
  itemsPerRow?: number;
}

const CardsList: React.FC<ICardListProps> = (props) => {
  const { data, cardSize, space, loadingData = true, ...rest } = props;

  return (
    <S.ListWrapper {...rest} space={space}>
      {!loadingData &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <S.ListItemLink key={item.uuid} to={item.uuid}>
              <S.ListItem
                cardSize={cardSize}
                title={item.title}
                status={item.status}
                description={item.description}
                meta={item.meta}
                extraIntel={item.extraIntel}
                tag={item.tag}
              />
            </S.ListItemLink>
          );
        })}
      {!loadingData && data.length === 0 && (
        <S.CustomParagraph>Sem resultados</S.CustomParagraph>
      )}
      {loadingData && <S.CustomParagraph>Carregando</S.CustomParagraph>}
    </S.ListWrapper>
  );
};

export default CardsList;
