import React, { useEffect, useState, useContext, useMemo } from 'react';
import { ContentWrapper } from '../../../components/templates';
import {
  ITableData,
  ITableHeader,
  ITableCell,
} from '../../../components/molecules/table/table.interface';
import { Table, Paginacao } from '../../../components/molecules';
import {
  Button,
  Paragraph,
  Toaster,
  Input,
  Spinner,
} from '../../../components/atoms';
import { styledButton as DownloadBtn } from '../../../components/atoms/button/style';
import { styledButton as UploadFile } from '../../../components/atoms/button/style';
import { styledButton as ToggleFilters } from '../../../components/atoms/button/style';
import {
  BiDownload,
  BiUpload,
  BiX,
  BiBlock,
  BiLike,
  BiDumbbell,
  BiBell,
  BiFilterAlt,
  BiMessageRoundedError,
} from 'react-icons/bi';
import ModalContext from '../../../context/modal';
import config from '../../../utils/config';
import * as S from './style';
import ToasterContext from '../../../context/toaster';
import AuthContext from '../../../context/auth';
import validateUserPermissions, {
  Permissions,
} from '../../../utils/permissions';
import useFetchLogs, { IApiResponse } from '../../../hooks/useFetchLogs';
import useFetchTenants, {
  IFetchTenantsHook,
} from '../../../hooks/useFetchTenants';
import { QueryFileStatus, fileStatus } from '../../../utils/enums';
import { ISODateFormat, BytesFormat } from '../../../utils/helpers/';
import theme from '../../../styles/theme';

const FormModal: React.FunctionComponent = () => {
  const { API_BASEURL, FILEUPLOAD_ENDPOINT } = config;
  const { modalState, toggleModalState } = useContext(ModalContext);
  const { state } = useContext(AuthContext);
  const { showToaster } = useContext(ToasterContext);
  const [file, setFile] = useState<File | null>();
  const [sending, setSending] = useState<boolean>(false);

  const handleFileInput = (files: FileList | null) => {
    if (files === null || files.item(0) === null) {
      return showToaster({
        message: 'Escolha um CSV a qualquer momento para enviar.',
        severity: 'warning',
        icon: <BiBell />,
      });
    }

    const uploadedFile = files.item(0);

    if (uploadedFile === null) {
      return showToaster({
        message: 'Escolha um CSV a qualquer momento para enviar.',
        severity: 'warning',
        icon: <BiBell />,
      });
    } else if (uploadedFile.size > config.MAX_FILE_SIZE) {
      return showToaster({
        message: 'Arquivo com tamanho maior que o permitido.',
        severity: 'negative',
        icon: <BiDumbbell />,
      });
    } else if (uploadedFile.type !== 'text/csv') {
      return showToaster({
        message: 'Arquivo com formato inválido.',
        severity: 'negative',
        icon: <BiBlock />,
      });
    }

    setFile(() => files.item(0));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSending(() => true);
    if (file === undefined || file === null) {
      return null;
    }

    const headers = new Headers();
    headers.append('filename', file.name);
    headers.append('pcw', state.profile);
    headers.append('name', state.userName);
    headers.append('email', state.email);

    if (state.organization !== undefined) {
      headers.append('companyid', state.organization);
    }

    const data = new FormData();
    data.append('file', file, file.name);

    const reqOptions = {
      method: 'POST',
      headers: headers,
      body: data,
    };

    fetch(API_BASEURL + FILEUPLOAD_ENDPOINT, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        showToaster({
          message: data.message,
          severity: data.statusCode < 300 ? 'positive' : 'negative',
          icon: data.statusCode < 300 ? <BiLike /> : <BiBlock />,
        });
      })
      .catch((reason) => {
        if (reason) {
          showToaster({
            message: 'Erro de conexão com o servidor.',
            severity: 'negative',
            icon: <BiBlock />,
          });
        }
      })
      .finally(() => {
        setSending(() => false);
        setFile(() => undefined);
        toggleModalState();
      });
  };

  return (
    <S.Modal show={modalState}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <span>
          <Paragraph weight='bold' size='large'>
            Enviar relatório
          </Paragraph>
          <Paragraph size='small'>
            O arquivo deve estar no formato CSV e ter no máximo 5mb.
          </Paragraph>
        </span>
        <Button
          buttonTheme='negative'
          borderLess
          onClick={() => {
            toggleModalState();
            setFile(undefined);
          }}
        >
          <BiX size={24} />
        </Button>
      </section>

      <S.Form onSubmit={handleSubmit}>
        <S.FormRow>
          <UploadFile htmlFor='file' as='label'>
            Escolher arquivo
          </UploadFile>
          <input
            required
            type='file'
            name='file'
            id='file'
            accept='.csv'
            onChange={(e) => handleFileInput(e.target.files)}
            hidden
          />
          <Paragraph size='small'>
            {file !== null && file !== undefined
              ? file.name
              : 'Nenhum arquivo selecionado'}
          </Paragraph>
        </S.FormRow>

        <Button
          buttonTheme='positive'
          type='submit'
          disabled={file === undefined || sending}
          style={{
            width: '100px',
          }}
        >
          {sending ? <Spinner /> : 'Enviar'}
        </Button>
      </S.Form>
    </S.Modal>
  );
};

interface IFileErrorFlag {
  status: string;
  detail: string;
}

const FileErrorFlag: React.FunctionComponent<IFileErrorFlag> = (props) => {
  const { status, detail } = props;

  return (
    <S.FlagWrapper>
      {status}
      <BiMessageRoundedError color={theme.colors.negative} title={detail} />
    </S.FlagWrapper>
  );
};

const ReportListPage = () => {
  const { state } = useContext(AuthContext);
  const { toggleModalState } = useContext(ModalContext);
  const { showToaster } = useContext(ToasterContext);

  const tableHeaders = useMemo<ITableHeader[]>(() => {
    const headers = [
      { id: 1, value: 'Arquivo enviado' },
      { id: 2, value: 'Arquivo renomeado' },
      { id: 3, value: 'Data do envio' },
      { id: 4, value: 'Tamanho do arquivo' },
      { id: 5, value: 'Qnt de ONTs' },
      { id: 6, value: 'Responsável pelo envio' },
      { id: 7, value: 'Status do envio' },
    ];

    if (validateUserPermissions(state.profile, Permissions['FULL_VIEW'])) {
      headers.push({ id: 8, value: 'Tenant' });
    }

    return headers;
  }, [state.profile]);

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
          icon: <BiBlock />,
        });
      } else if (data !== undefined) {
        const { results, totalPages } = data;

        setTableData((currentData) => ({
          headers: currentData.headers,
          rows: Array.from(results, (item, index) => {
            const cell: ITableCell[] = [
              {
                value: (
                  <span
                    style={{
                      display: 'block',
                      width: '100px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.ARQUIVO_ENVIADO}
                  >
                    {item.ARQUIVO_ENVIADO}
                  </span>
                ),
              },
              {
                value: (
                  <span
                    style={{
                      display: 'block',
                      width: '100px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.ARQUIVO_RENOMEADO}
                  >
                    {item.ARQUIVO_RENOMEADO}
                  </span>
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

            if (
              item.STATUS_ENVIO_DETALHE !== null &&
              (item.STATUS_ENVIO === QueryFileStatus['ERRO'] ||
                item.STATUS_ENVIO === QueryFileStatus['INVALIDO'])
            ) {
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

            if (
              validateUserPermissions(state.profile, Permissions['FULL_VIEW'])
            ) {
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
  }, [loading, data, error, listLength, state.profile]);

  useEffect(() => {
    setPage(0);
  }, [listLength, selectedStatus, searchTerm, tenantFilter]);

  return (
    <S.PageContainer>
      <ContentWrapper pageTitle='Relatório de envios'>
        <h2>Relatório de envios</h2>

        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '16px 0px',
          }}
        >
          <section
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <Input
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
          </section>

          <section
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <ToggleFilters
              onClick={() => setShowFilter((currentState) => !currentState)}
              rounded
            >
              <BiFilterAlt />
            </ToggleFilters>
            <DownloadBtn
              buttonTheme='Mauve'
              as='a'
              href='/modelo/cp-unix_time_stamp.csv'
              download='modelo_relatorio.csv'
            >
              Download do modelo <BiDownload />
            </DownloadBtn>
            {validateUserPermissions(state.profile, Permissions['UPLOAD']) && (
              <Button buttonTheme='Coral' onClick={() => toggleModalState()}>
                Enviar relatório <BiUpload />
              </Button>
            )}
          </section>
        </section>
        <section
          style={{
            display: showFilter ? 'flex' : 'none',
            gap: 16,
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <label
              htmlFor='fileStatusSelect'
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              Status
            </label>
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
              <option value=''>Selecione um status</option>
              {fileStatus.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.text}
                </option>
              ))}
            </S.Combobox>
          </div>

          {validateUserPermissions(state.profile, Permissions['FULL_VIEW']) && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <label
                htmlFor='tenantSelect'
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                Tenant
              </label>
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
                <option value=''>Selecione a tenant</option>
                {tenantData.data !== undefined &&
                  tenantData.data.map((tenant) => (
                    <option key={tenant.toLowerCase()} value={tenant}>
                      {tenant}
                    </option>
                  ))}
              </S.Combobox>
            </div>
          )}
        </section>

        <Table data={tableData} loadingData={loading} />

        <Paginacao
          qtdPag={totalPages}
          actualPage={page}
          setPage={(p: number) => setPage(p)}
          setQtdItems={(p: number) => setListLength(() => p)}
          selectedOptPage={listLength}
        />

        <FormModal />
        <Toaster withIcon withBtn />
      </ContentWrapper>
    </S.PageContainer>
  );
};

export default ReportListPage;
