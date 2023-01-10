import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { CardListItem } from '../../molecules';
import { Paragraph } from '../../atoms';

export interface ICardSize {
  cardSize?: string;
}

const defaultCardSize = '260px';

export const ListItemLink = styled(Link)`
  text-decoration: none;
  color: unset;

  &:hover {
    color: unset;
  }
`;

export const ListItem = styled(CardListItem)<ICardSize>((props) => {
  const { cardSize = defaultCardSize } = props;

  return css`
    width: ${cardSize};
    height: 100%;
    flex-direction: column;

    & > section:nth-of-type(3) {
      margin-top: auto;

      & > section:nth-of-type(2) {
        gap: 4px;

        & > section {
          width: calc(50% - 4px);
          margin: 0px;
        }
      }
    }
  `;
});

export interface IListWrapper {
  space?: string;
}

const defaultSpace = '1.6rem';

export const ListWrapper = styled.section<IListWrapper>((props) => {
  const { space = defaultSpace } = props;

  return css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${space};
    width: 100%;
  `;
});

export const ListRow = styled.section<IListWrapper>((props) => {
  const { space = defaultSpace } = props;

  return css`
    width: 100%;
    display: flex;
    gap: ${space};
  `;
});

export const CustomParagraph = styled(Paragraph)`
  white-space: nowrap;
`;
