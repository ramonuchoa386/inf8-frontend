import React from 'react';
import { render, screen } from '../../../utils/test/test-utils';
import Image from './';
import sampleImage from '../../../assets/test/logo-test-jest.png';
import { ReactComponent as SampleImageSVG } from '../../../assets/test/logo.svg';

describe('Image component', () => {
  test('Deve renderizar uma imagem png', async () => {
    render(<Image src={sampleImage} alt='test' />);

    const img = screen.queryByAltText('test');

    expect(img).toBeInTheDocument();
    expect(img).toContainHTML('img');
  });
  test('Deve renderizar uma imagem SVG', async () => {
    render(<Image src={SampleImageSVG} alt='test' />);

    const img = screen.getByText(/svg/i);

    expect(img).toBeInTheDocument();
  });
});
