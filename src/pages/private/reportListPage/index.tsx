import { useContext, useEffect, useMemo, useState } from 'react';

import { fileStatus, QueryFileStatus } from '../../../utils/enums';
import BytesFormat from '../../../utils/helpers/bytesFormat';
import ISODateFormat from '../../../utils/helpers/isoDateFormat';
import { IApiResponse } from '../../../utils/interfaces';
import validateUserPermissions, {
  Permissions,
} from '../../../utils/permissions';

import {
  ITableCell,
  ITableData,
  ITableHeader,
} from '../../../components/molecules/table/table.interface';

import AuthContext from '../../../context/auth';
import ModalContext from '../../../context/modal';
import ToasterContext from '../../../context/toaster';

import useFetchLogs from '../../../hooks/useFetchLogs';
import useFetchTenants, {
  IFetchTenantsHook,
} from '../../../hooks/useFetchTenants';

import { FileErrorFlag } from './components';
import * as S from './style';

const ReportListPage = () => {
  const { state } = useContext(AuthContext);
  const { toggleModalState } = useContext(ModalContext);
  const { showToaster } = useContext(ToasterContext);

  const tableHeaders = useMemo<ITableHeader[]>(() => {
    const headers = [
      { id: 1, value: 'Nome' },
      { id: 2, value: 'Renome' },
      { id: 3, value: 'Data' },
      { id: 4, value: 'Tamanho' },
      { id: 5, value: 'ONTs' },
      { id: 6, value: 'Responsável' },
      { id: 7, value: 'Status' },
    ];

    if (validateUserPermissions(state.pcw, Permissions['FULL_VIEW'])) {
      headers.push({ id: 8, value: 'Companhia' });
    }

    return headers;
  }, [state.pcw]);

  const columnSizes = useMemo<string[]>(() => {
    if (validateUserPermissions(state.pcw, Permissions['FULL_VIEW'])) {
      return ['15%', '15%', '10%', '10%', '10%', '15%', '15%', '10%'];
    } else {
      return ['15%', '15%', '10%', '10%', '10%', '15%', '25%'];
    }
  }, [state.pcw]);

  const handleCopyContent = (content: string) => {
    navigator.clipboard.writeText(content);

    showToaster({
      message: 'Copiado para a área de transferência.',
      severity: 'positive',
      icon: <S.ThumbsUpIcon />,
    });
  };

  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [listLength, setListLength] = useState<number>(12);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [tenantFilter, setTenantFilter] = useState<string>();
  const [selectedStatus, setSelectedStatus] = useState<QueryFileStatus>();
  const [tableData, setTableData] = useState<ITableData>({
    headers: tableHeaders,
    rows: [],
  });

  const { data, error, loading }: IApiResponse = useFetchLogs(
    listLength,
    page,
    selectedStatus,
    searchTerm,
    tenantFilter
  );
  const tenantData: IFetchTenantsHook = useFetchTenants();

  useEffect(() => {
    if (!loading) {
      if (error !== undefined) {
        showToaster({
          message: error,
          severity: 'negative',
          icon: <S.BlockIcon />,
        });
      } else if (data !== undefined) {
        const { results, totalPages } = data;

        setTableData((currentData) => ({
          headers: currentData.headers,
          rows: Array.from(results, (item, index) => {
            const cell: ITableCell[] = [
              {
                value: (
                  <S.FileNameCell>
                    <S.FileNameWrapper title={item.ARQUIVO_ENVIADO}>
                      {item.ARQUIVO_ENVIADO}
                    </S.FileNameWrapper>
                    <S.CopyIcon
                      onClick={() => handleCopyContent(item.ARQUIVO_ENVIADO)}
                    />
                  </S.FileNameCell>
                ),
              },
              {
                value: (
                  <S.FileNameCell>
                    <S.FileNameWrapper title={item.ARQUIVO_RENOMEADO}>
                      {item.ARQUIVO_RENOMEADO}
                    </S.FileNameWrapper>
                    {item.ARQUIVO_RENOMEADO !== null && (
                      <S.CopyIcon
                        onClick={() =>
                          handleCopyContent(item.ARQUIVO_RENOMEADO)
                        }
                      />
                    )}
                  </S.FileNameCell>
                ),
              },
              {
                value: ISODateFormat(item.DATA_ENVIO),
              },
              {
                value: BytesFormat(item.TAMANHO),
              },
              {
                value: item.QNT_ONTS,
              },
              {
                value: item.RESPONSAVEL_ENVIO,
              },
            ];

            if (item.STATUS_ENVIO_DETALHE !== null) {
              cell.push({
                value: (
                  <FileErrorFlag
                    status={item.STATUS_ENVIO}
                    detail={item.STATUS_ENVIO_DETALHE}
                  />
                ),
              });
            } else {
              cell.push({
                value: item.STATUS_ENVIO,
              });
            }

            if (validateUserPermissions(state.pcw, Permissions['FULL_VIEW'])) {
              cell.push({
                value: item.COMPANYID,
              });
            }

            return {
              id: index + 1,
              cell: cell,
            };
          }),
        }));

        setTotalPages(totalPages);
      }
    }
  }, [loading, data, error, listLength, state.pcw]);

  useEffect(() => {
    setPage(0);
  }, [listLength, selectedStatus, searchTerm, tenantFilter]);

  return (
    <S.PageContainer>
      <S.PageWrapper pageTitle='Relatório de envios'>
        <S.PageTitle>Relatório de envios</S.PageTitle>

        <S.TopBar>
          <S.SearchInput
            id='search'
            name='search'
            iconName='BiSearch'
            placeholder='Pesquisar'
            onChange={(e) => {
              if (e.target.value === '') {
                setSearchTerm(undefined);
              } else {
                setSearchTerm(() => e.target.value);
              }
            }}
          />

          <S.TopBarBtnsWrapper>
            <S.ToggleFilters
              onClick={() => setShowFilter((currentState) => !currentState)}
              rounded
            >
              <S.FilterAltIcon />
            </S.ToggleFilters>
            <S.DownloadBtn
              buttonTheme='Mauve'
              as='a'
              href='/inf8/modelo/cp-unix_time_stamp.csv'
              download='modelo_relatorio.csv'
            >
              Download do modelo <S.DownloadIcon />
            </S.DownloadBtn>
            {validateUserPermissions(state.pcw, Permissions['UPLOAD']) && (
              <S.OpenFormBtn buttonTheme='Coral' onClick={toggleModalState}>
                Enviar relatório <S.UploadIcon />
              </S.OpenFormBtn>
            )}
          </S.TopBarBtnsWrapper>
        </S.TopBar>
        <S.FilterWrapper showFilter={showFilter}>
          <S.FilterContainer>
            <S.FilterLabel>Status</S.FilterLabel>
            <S.Combobox
              id='fileStatusSelect'
              name='fileStatusSelect'
              value={selectedStatus}
              onChange={(e) => {
                if (e.target.value === '') {
                  setSelectedStatus(undefined);
                } else {
                  setSelectedStatus(e.target.value as QueryFileStatus);
                }
              }}
              defaultValue=''
            >
              <S.ComboboxOption value=''>Selecione um status</S.ComboboxOption>
              {fileStatus.map((status) => (
                <S.ComboboxOption key={status.value} value={status.value}>
                  {status.text}
                </S.ComboboxOption>
              ))}
            </S.Combobox>
          </S.FilterContainer>

          {validateUserPermissions(state.pcw, Permissions['FULL_VIEW']) && (
            <S.FilterContainer>
              <S.FilterLabel>Tenant</S.FilterLabel>
              <S.Combobox
                id='tenantSelect'
                name='tenantSelect'
                value={tenantFilter}
                onChange={(e) => {
                  if (e.target.value === '') {
                    setTenantFilter(undefined);
                  } else {
                    setTenantFilter(e.target.value);
                  }
                }}
                defaultValue=''
                disabled={tenantData.loading}
              >
                <S.ComboboxOption value=''>Selecione a tenant</S.ComboboxOption>
                {tenantData.data !== undefined &&
                  tenantData.data.map((tenant) => (
                    <S.ComboboxOption key={tenant.toLowerCase()} value={tenant}>
                      {tenant}
                    </S.ComboboxOption>
                  ))}
              </S.Combobox>
            </S.FilterContainer>
          )}
        </S.FilterWrapper>

        <S.ReportTable
          columnsSizes={columnSizes}
          data={tableData}
          loadingData={loading}
        />

        <S.PageControl
          qtdPag={totalPages}
          actualPage={page}
          setPage={(page: number) => setPage(() => page)}
          setQtdItems={(listLength: number) => setListLength(() => listLength)}
          selectedOptPage={listLength}
        />

        <S.FileForm />
        <S.Toaster withIcon withBtn />
      </S.PageWrapper>
    </S.PageContainer>
  );
};

export default ReportListPage;
