import React from 'react';
import { rendererCreate } from '../../../utils/test/test-utils';

import Page from '.';

describe('Dashboard', () => {
  test('Snapshot', () => {
    const page = rendererCreate(<Page />).toJSON();
    expect(page).toMatchSnapshot();
  });
});
