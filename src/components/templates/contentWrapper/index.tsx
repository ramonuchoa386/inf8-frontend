import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../organisms';
import * as S from './styles';

interface IContentWrapper {
  pageTitle: string;
}

const ContentWrapper = (props: React.PropsWithChildren<IContentWrapper>) => {
  const { pageTitle, children, ...rest } = props;

  return (
    <S.Main {...rest}>
      <Helmet>
        <title>{`${pageTitle} - API Hub | V.tal`}</title>
      </Helmet>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Main>
  );
};

export default ContentWrapper;
