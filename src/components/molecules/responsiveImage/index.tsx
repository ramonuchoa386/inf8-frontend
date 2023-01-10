import React from 'react';
import * as S from './styles';
import theme from './../../../styles/theme';

export interface IResposiveImageProps {
  mobileSrc: string;
  altText: string;
  tabletSrc: string;
  desktopSrc: string;
}

/**
 * Componente de imagens responsivas
 *
 *
 * @param {string} mobileSrc - caminho da imagem padrão
 * @param {string} altText - texto alternativo
 * @param {string} tabletSrc - caminho da imagem para dispositivos tablet
 * @param {string} desktopSrc - caminho  da imagem para dispositivos desktop
 *
 */

function ResponsiveImage(props: IResposiveImageProps) {
  const { mobileSrc, altText, tabletSrc, desktopSrc, ...args } = props;

  return (
    <picture {...args}>
      <source
        media={`(min-width: ${theme.layout.breakpoints.desktop})`}
        srcSet={desktopSrc}
      />
      <source
        media={`(min-width: ${theme.layout.breakpoints.tablet})`}
        srcSet={tabletSrc}
      />
      <S.Image src={mobileSrc} alt={altText} />
    </picture>
  );
}

export default ResponsiveImage;
