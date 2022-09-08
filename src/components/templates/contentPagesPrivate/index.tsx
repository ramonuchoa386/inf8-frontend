import React from 'react';

import { Helmet } from 'react-helmet-async';

// Components
import { Header } from '../../organisms';

// Styles
import * as S from './styles';

const TemplateContentPagesPrivate = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) => {
  return (
    <S.Main>
      <Helmet>
        <title>{`${pageTitle} - Portal APIM | V.tal`}</title>
      </Helmet>
      <S.Box>
        <Header onlyMobile={false} />
        <S.Content>{children}</S.Content>
      </S.Box>
    </S.Main>
  );
};

export default TemplateContentPagesPrivate;
