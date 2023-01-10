import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { rendererCreate } from '../../../utils/test/test-utils';

import Page from '.';

describe('Dashboard', () => {
  test('Snapshot', () => {
    const page = rendererCreate(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    ).toJSON();
    expect(page).toMatchSnapshot();
  });
});
