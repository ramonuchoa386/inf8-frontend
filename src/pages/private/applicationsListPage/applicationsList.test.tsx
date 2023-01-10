import React from 'react';
import { rendererCreate } from '../../../utils/test/test-utils';

import ApplicationsListPage from '.';

describe('Applications list', () => {
  test('Snapshot', () => {
    const page = rendererCreate(<ApplicationsListPage />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
