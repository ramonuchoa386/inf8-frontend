import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveImage from './';
import mobileImg from '../../../assets/images/loginPage/login-page-bg-mobile.png';
import tabletImg from '../../../assets/images/loginPage/login-page-bg-tablet.png';
import desktopImg from '../../../assets/images/loginPage/login-page-bg-desktop.png';

describe('ResponsiveImage component', () => {
  test('Deve renderizar uma tag picture com imagem default e srcSet', async () => {
    render(
      <ResponsiveImage
        mobileSrc={mobileImg}
        tabletSrc={tabletImg}
        desktopSrc={desktopImg}
        altText='test'
        data-testid='resposiveImageTest'
      />
    );

    const pic = screen.getByTestId('resposiveImageTest');
    const src = pic.querySelector('source');
    const img = pic.querySelector('img');

    expect(pic).toContainHTML('picture');
    expect(pic).toContainElement(src);
    expect(pic).toContainElement(img);
  });
});
