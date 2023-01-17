import React, { useEffect, useState, useContext } from 'react';
import { ContentWrapper } from '../../../components/templates';
import { ITableData } from '../../../components/molecules/table/table.interface';
import { Table, Paginacao } from '../../../components/molecules';
import { Button, Paragraph, Toaster } from '../../../components/atoms';
import { styledButton as DownloadBtn } from '../../../components/atoms/button/style';
import { styledButton as UploadFile } from '../../../components/atoms/button/style';
import {
  BiDownload,
  BiUpload,
  BiX,
  BiBlock,
  BiLike,
  BiDumbbell,
  BiBell,
} from 'react-icons/bi';
import { TableMock } from './reportListPage.mocks';
import ModalContext from '../../../context/modal';
import config from '../../../utils/config';
import * as S from './style';
import ToasterContext from '../../../context/toaster';
import AuthContext from '../../../context/auth';
import validateUserPermissions, {
  Permissions,
} from '../../../utils/permissions';

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
  const [paginaAtual] = React.useState(0);
  const [listLength, setListLength] = React.useState<number>(12);
  const [loading, setDataLoaded] = useState<boolean>(true);
  const [tableData, setTableData] = useState<ITableData>({
    headers: [
      { id: 1, value: 'Arquivo enviado' },
      { id: 2, value: 'Arquivo renomeado' },
      { id: 3, value: 'Data do envio' },
      { id: 4, value: 'Tamanho (bytes)' },
      { id: 5, value: 'Qnt de ONTs' },
      { id: 6, value: 'Responsável pelo envio' },
      { id: 7, value: 'Status do envio' },
    ],
    rows: [],
  });

  useEffect(() => {
    setTableData((currentData) => ({
      headers: currentData.headers,
      rows: TableMock,
    }));
    setDataLoaded(false);
  }, []);

  return (
    <S.PageContainer>
      <ContentWrapper pageTitle='Relatório de envios'>
        <h2>Relatório de envios</h2>

        <section
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 16,
            margin: '16px 0px',
          }}
        >
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

        <Table data={tableData} loadingData={loading} />

        <Paginacao
          qtdPag={10}
          actualPage={paginaAtual}
          setPage={(p: number) => console.log(p)}
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
