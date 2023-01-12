import React from 'react';
import { rendererCreate } from '../../../utils/test/test-utils';

import ReportListPage from '.';

describe('Applications list', () => {
  test('Snapshot', () => {
    const page = rendererCreate(<ReportListPage />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
