import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { rendererCreate } from '../../../utils/test/test-utils';

import Page from '.';

describe('Cwp', () => {
  test('Snapshot', () => {
    const page = rendererCreate(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    ).toJSON();
    expect(page).toMatchSnapshot();
  });
});
