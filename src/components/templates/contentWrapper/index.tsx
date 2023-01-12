import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalContext from '../../../context/modal';
import { Header } from '../../organisms';
import * as S from './styles';

interface IContentWrapper {
  pageTitle: string;
}

const ContentWrapper = (props: React.PropsWithChildren<IContentWrapper>) => {
  const { modalState } = useContext(ModalContext);
  const { pageTitle, children, ...rest } = props;

  return (
    <S.Main {...rest} overlay={modalState}>
      <Helmet>
        <title>{`${pageTitle} - INF8 | V.tal`}</title>
      </Helmet>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Main>
  );
};

export default ContentWrapper;
