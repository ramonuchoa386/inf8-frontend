import React, { useEffect, useState, useContext, useMemo } from 'react';
import { ContentWrapper } from '../../../components/templates';
import {
  ITableData,
  ITableHeader,
} from '../../../components/molecules/table/table.interface';
import { Table, Paginacao } from '../../../components/molecules';
import { Button, Paragraph, Toaster, Input } from '../../../components/atoms';
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
import { QueryFileStatus, fileStatus, Profiles } from '../../../utils/enums';

const FormModal: React.FunctionComponent = () => {
  const { API_BASEURL, FILEUPLOAD_ENDPOINT } = config;
  const { modalState, toggleModalState } = useContext(ModalContext);
  const { showToaster } = useContext(ToasterContext);
  const [file, setFile] = useState<File | null>();

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
    if (file === undefined || file === null) {
      return null;
    }

    const headers = new Headers();
    headers.append('organization', 'SAMPLEISP');
    headers.append('file-name', file.name);

    const data = new FormData();
    data.append('file', file, file.name);

    const reqOptions = {
      method: 'POST',
      headers: headers,
      body: data,
    };

    fetch(API_BASEURL + FILEUPLOAD_ENDPOINT, reqOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 500) {
          showToaster({
            message: 'Não foi possível concluir o envio do arquivo.',
            severity: 'negative',
            icon: <BiBlock />,
          });
        } else {
          showToaster({
            message: 'Arquivo enviado com sucesso.',
            severity: 'positive',
            icon: <BiLike />,
          });
        }
      })
      .catch((reason) => {
        showToaster({
          message: `Erro: ${reason}.`,
          severity: 'negative',
          icon: <BiBlock />,
        });
      })
      .finally(() => toggleModalState());
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
          disabled={file === undefined}
        >
          Enviar
        </Button>
      </S.Form>
    </S.Modal>
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
      { id: 4, value: 'Tamanho (bytes)' },
      { id: 5, value: 'Qnt de ONTs' },
      { id: 6, value: 'Responsável pelo envio' },
      { id: 7, value: 'Status do envio' },
    ];

    if (
      state.profile === Profiles.OP_VTAL ||
      state.profile === Profiles.VW_VTAL
    ) {
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
      if (error) {
        showToaster({
          message: error,
          severity: 'negative',
          icon: <BiBlock />,
        });
      } else if (data) {
        const { results, totalPages } = data;

        if (results.length > 0) {
          setTableData((currentData) => ({
            headers: currentData.headers,
            rows: Array.from(results, (item, index) => {
              if (
                state.profile === Profiles.OP_VTAL ||
                state.profile === Profiles.VW_VTAL
              ) {
                return {
                  id: index + 1,
                  cell: [
                    {
                      value: item.arquivo_enviado,
                    },
                    {
                      value: item.arquivo_renomeado,
                    },
                    {
                      value: item.data_envio,
                    },
                    {
                      value: item.tamanho,
                    },
                    {
                      value: item.qnt_onts,
                    },
                    {
                      value: item.responsavel_envio,
                    },
                    {
                      value: item.status_envio,
                    },
                    {
                      value: item.companyid,
                    },
                  ],
                };
              } else {
                return {
                  id: index + 1,
                  cell: [
                    {
                      value: item.arquivo_enviado,
                    },
                    {
                      value: item.arquivo_renomeado,
                    },
                    {
                      value: item.data_envio,
                    },
                    {
                      value: item.tamanho,
                    },
                    {
                      value: item.qnt_onts,
                    },
                    {
                      value: item.responsavel_envio,
                    },
                    {
                      value: item.status_envio,
                    },
                  ],
                };
              }
            }),
          }));

          setTotalPages(totalPages);
        }
      }
    }
  }, [loading, data, error, showToaster, listLength, state.profile]);

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

          <div
            style={{
              display:
                state.profile === Profiles.OP_VTAL ||
                state.profile === Profiles.VW_VTAL
                  ? 'flex'
                  : 'none',
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
