import React from 'react';
import { EndpointListApiInterface as EndpointParams } from '../../../utils/endpoints';
import FavViewContext from '../../../context/listViewPreference';
import { ITableData } from '../../molecules/table/table.interface';
import { ICardsList } from '../../organisms/cardsList';
import * as S from './styles';
import { Options } from '../../molecules/extendedFilterOptions';

interface IDataViewControlProps {
  qtdItems: number;
  cardData: ICardsList[];
  tableData: ITableData;
  handleRequest(params: EndpointParams): any;
  loading?: boolean;
  optionsFields?: Options[];
}

const DataViewControl: React.FunctionComponent<IDataViewControlProps> = (
  props
) => {
  const {
    qtdItems,
    cardData,
    tableData,
    handleRequest,
    optionsFields,
    loading = true,
    ...rest
  } = props;
  const { viewPreferenceState } = React.useContext(FavViewContext);
  const optQtdPorPagina = [12, 24, 36];
  const [paginaAtual, setPaginaAtual] = React.useState(0);
  const [qtdPorPagina, setQtdPorPagina] = React.useState(optQtdPorPagina[0]);
  const [selectedOptPage, setSelectedOptPage] = React.useState(qtdPorPagina);
  const [params] = React.useState<EndpointParams>({
    page: '0',
    size: qtdPorPagina,
    sort: 'createTs',
    ordenacao: '',
  });

  const handleUpdate = (params: EndpointParams, key?: string) => {
    const page = parseInt(`${params.page}`);
    const qtdPorPagina = parseInt(`${params.size}`);

    if (key === 'Enter') {
      Object.assign(params, { page: '0' });
      setPaginaAtual(0);
      handleUpdate(params);
      return;
    } else if (key) {
      return;
    }

    setPaginaAtual(page);
    setQtdPorPagina(qtdPorPagina);
    setSelectedOptPage(qtdPorPagina);

    handleRequest(params);
  };

  return (
    <S.DataViewControlWrapper {...rest}>
      <S.DataControlComponent
        triggerSearch={(e: EndpointParams) => {
          handleUpdate({ ...e, ...params }, 'Enter');
        }}
        optionsFields={optionsFields}
      />

      {viewPreferenceState === 'card' && (
        <S.DataListCardView loadingData={loading} data={cardData} />
      )}
      {viewPreferenceState === 'list' && (
        <S.DataListTableView loadingData={loading} data={tableData} />
      )}

      <S.Paginacao
        optionQtdItems={optQtdPorPagina}
        setQtdItems={(e) =>
          handleUpdate({ ...params, ...{ size: `${e}`, page: '0' } })
        }
        qtdPag={Math.ceil(qtdItems / qtdPorPagina)}
        actualPage={paginaAtual}
        setPage={(e) => handleUpdate({ ...params, ...{ page: `${e}` } })}
        selectedOptPage={selectedOptPage}
      />
    </S.DataViewControlWrapper>
  );
};

export default DataViewControl;
