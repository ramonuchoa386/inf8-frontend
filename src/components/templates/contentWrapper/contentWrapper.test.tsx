import React from 'react';
import { rendererCreate } from '../../../utils/test/test-utils';
import ContentWrapper from '.';

describe('Componente ContentWrapper', () => {
  test('Snapshot', () => {
    const template = rendererCreate(
      <ContentWrapper pageTitle='Title'>
        <div>Template test</div>
      </ContentWrapper>
    ).toJSON();

    expect(template).toMatchSnapshot();
  });
});
