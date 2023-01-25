import React from 'react';
import * as S from './styles';

export interface iPagnicao {
  qtdPag: number;
  actualPage: number;
  setPage(p: number): any;
  setQtdItems(p: number): any;
  optionQtdItems?: number[];
  selectedOptPage: number;
}

const Paginacao: React.FunctionComponent<iPagnicao> = (props) => {
  const {
    qtdPag,
    actualPage,
    setPage,
    setQtdItems,
    optionQtdItems,
    selectedOptPage,
    ...rest
  } = props;

  return (
    <S.Container {...rest}>
      <S.ItemsPorPaginaWrapper>
        <S.Drop
          items={!optionQtdItems ? [12, 24, 36] : optionQtdItems}
          setItem={(e) => setQtdItems(typeof e === 'string' ? parseInt(e) : e)}
          selected={selectedOptPage}
        />
        {' items por pág.'}
      </S.ItemsPorPaginaWrapper>

      <S.PaginacaoButtonWrapper show={qtdPag > 1}>
        <S.Paginacao
          borderLess
          onClick={() => setPage(0)}
          disabled={actualPage == 0}
        >
          {'<<'}
        </S.Paginacao>
        <S.Paginacao
          borderLess
          onClick={() => setPage(actualPage - 1)}
          disabled={actualPage == 0}
        >
          {'<'}
        </S.Paginacao>

        {actualPage - 2 >= 0 && (
          <S.Paginacao borderLess onClick={() => setPage(actualPage - 2)}>
            {actualPage - 1}
          </S.Paginacao>
        )}

        {actualPage - 1 >= 0 && (
          <S.Paginacao borderLess onClick={() => setPage(actualPage - 1)}>
            {actualPage}
          </S.Paginacao>
        )}
        <S.Paginacao borderLess onClick={() => setPage(actualPage)} activePage>
          {actualPage + 1}
        </S.Paginacao>
        {actualPage + 1 < qtdPag && (
          <S.Paginacao borderLess onClick={() => setPage(actualPage + 1)}>
            {actualPage + 2}
          </S.Paginacao>
        )}

        {actualPage + 2 < qtdPag && (
          <S.Paginacao borderLess onClick={() => setPage(actualPage + 2)}>
            {actualPage + 3}
          </S.Paginacao>
        )}

        {actualPage + 3 < qtdPag && (
          <>
            <S.Etc>...</S.Etc>
            <S.Paginacao borderLess onClick={() => setPage(qtdPag - 1)}>
              {qtdPag}
            </S.Paginacao>
          </>
        )}

        <S.Paginacao
          borderLess
          onClick={() => setPage(actualPage + 1)}
          disabled={actualPage + 1 > qtdPag - 1}
        >
          {'>'}
        </S.Paginacao>
        <S.Paginacao
          borderLess
          onClick={() => setPage(qtdPag - 1)}
          disabled={actualPage === qtdPag - 1}
        >
          {'>>'}
        </S.Paginacao>
      </S.PaginacaoButtonWrapper>
    </S.Container>
  );
};

export default Paginacao;
