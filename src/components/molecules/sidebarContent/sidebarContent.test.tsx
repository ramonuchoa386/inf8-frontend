/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { rendererCreate } from './../../../utils/test/test-utils';

import SidebarContent from '.';

describe('Componente SidebarContent', () => {
  test('Deve renderizar o menu lateral', () => {
    const sidebar = rendererCreate(<SidebarContent />).toJSON();

    expect(sidebar).toMatchSnapshot();
  });
});
