import React from 'react';
import * as S from './styles';

export interface Image {
  alt: string;
  src: any;
}

const Image = ({ src, alt, ...props }: Image) => {
  const I = src;

  if (typeof src === 'object') {
    return <I title={alt} {...props} />;
  }

  return <S.Imagem src={src} alt={alt} {...props}></S.Imagem>;
};

export default Image;
