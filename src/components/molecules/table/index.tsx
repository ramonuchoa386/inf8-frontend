import React from 'react';
import * as S from './styles';
import { ITableProps } from './table.interface';

const Table = (
  props: ITableProps & React.TableHTMLAttributes<HTMLTableElement>
) => {
  const { data, columnsSizes, loadingData = true, ...rest } = props;

  if (data.headers.length === 0 && data.rows.length === 0) {
    return <p>Nenhum dado para mostrar</p>;
  }

  return (
    <S.Table {...rest}>
      <S.TableColGroup>
        {columnsSizes !== undefined &&
          columnsSizes.map((colSize, index) => (
            <S.TableColGroupItem
              key={`col-size-${colSize.replace('%', '')}-${index}`}
              span={1}
              size={colSize}
            />
          ))}
      </S.TableColGroup>

      <S.TableHead>
        <S.TableRow>
          {data.headers.length > 0 &&
            data.headers.map((header) => (
              <S.TableHeadColumn key={header.id}>
                {header.value}
              </S.TableHeadColumn>
            ))}
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {!loadingData && data.rows.length > 0
          ? data.rows.map(({ id, cell }) => (
              <S.TableRow key={id}>
                {cell.map((item, index) => {
                  return (
                    <S.TableRowColumn key={id + index}>
                      {item.value}
                    </S.TableRowColumn>
                  );
                })}
              </S.TableRow>
            ))
          : !loadingData && (
              <S.TableRow>
                <S.TableRowColumn>Sem resultados</S.TableRowColumn>
              </S.TableRow>
            )}
        {loadingData && (
          <S.TableRow>
            <S.TableRowColumn>Carregando</S.TableRowColumn>
          </S.TableRow>
        )}
      </S.TableBody>
    </S.Table>
  );
};

export default Table;
