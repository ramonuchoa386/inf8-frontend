import React from 'react';
import { rendererCreate } from '../../../utils/test/test-utils';
import TemplateContentPagesPrivate from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Componente TemplateContentPages', () => {
  test('Snapshot', () => {
    const template = rendererCreate(
      <MemoryRouter>
        <TemplateContentPagesPrivate pageTitle='Title'>
          <div>Template test</div>
        </TemplateContentPagesPrivate>
      </MemoryRouter>
    ).toJSON();

    expect(template).toMatchSnapshot();
  });
});
