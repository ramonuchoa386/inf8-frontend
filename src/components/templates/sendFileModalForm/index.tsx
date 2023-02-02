import React, { useState, useContext } from 'react';
import { BiX, BiBlock, BiLike, BiDumbbell, BiBell } from 'react-icons/bi';

import config from '../../../utils/config';

import ModalContext from '../../../context/modal';
import ToasterContext from '../../../context/toaster';
import AuthContext from '../../../context/auth';

import * as S from './style';

const SendFileFormModal: React.FunctionComponent = (props) => {
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
    headers.append('pcw', state.pcw);
    headers.append('name', state.name);
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
    <S.Modal show={modalState} {...props}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <span>
          <S.Text weight='bold' size='large'>
            Enviar relatório
          </S.Text>
          <S.Text size='small'>
            O arquivo deve estar no formato CSV e ter no máximo 5mb.
          </S.Text>
        </span>
        <S.CloseFormBtn
          buttonTheme='negative'
          borderLess
          onClick={() => {
            toggleModalState();
            setFile(undefined);
          }}
        >
          <BiX size={24} />
        </S.CloseFormBtn>
      </section>

      <S.Form onSubmit={handleSubmit}>
        <S.FormRow>
          <S.UploadFile htmlFor='file' as='label'>
            Escolher arquivo
          </S.UploadFile>
          <S.FileInput
            required
            type='file'
            name='file'
            id='file'
            accept='.csv'
            onChange={(e) => handleFileInput(e.target.files)}
            hidden
          />
          <S.Text size='small'>
            {file !== null && file !== undefined
              ? file.name
              : 'Nenhum arquivo selecionado'}
          </S.Text>
        </S.FormRow>

        <S.SendFileBtn
          buttonTheme='positive'
          type='submit'
          disabled={file === undefined || sending}
          style={{
            width: '100px',
          }}
        >
          {sending ? <S.Loader /> : 'Enviar'}
        </S.SendFileBtn>
      </S.Form>
    </S.Modal>
  );
};

export default SendFileFormModal;
