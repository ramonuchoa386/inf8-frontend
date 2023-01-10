import React from 'react';
import { render, screen } from '../../../utils/test/test-utils';
import { act } from 'react-dom/test-utils';
import ApiDetailInfoDisplay, { iApiDetailInfoDisplay } from '.';

it('Deve renderizar um componente de detalhe de detalhes da Api apenas String', () => {
  act(() => {
    const data: iApiDetailInfoDisplay = {
      painel: [
        { title: 'General1', text: 'textGeneral1' },
        {
          title: 'General2',
          text: 'ENABLED',
          type: 'healthCheck',
        },
        { title: 'General3', text: '1590908973485', type: 'Date' },
      ],
      applications: { title: 'Applications1', text: 'textApplications1' },
      painelInfo: [
        { title: 'painelInfo1', text: 'painelInfoText1' },
        { title: 'painelInfo2', text: 'painelInfoText2', tag: true },
      ],
      painelSecondaryInfo: [
        {
          title: 'painelSecondaryInfo1',
          text: 'painelSecondaryInfoText1',
        },
        {
          title: 'painelSecondaryInfo2',
          text: 'painelSecondaryInfoText2',
          tag: true,
        },
      ],
    };

    render(
      <div data-testid={'apidetailinfo'}>
        <ApiDetailInfoDisplay {...data} />
      </div>
    );
  });

  const detailInfo = screen.getByTestId('apidetailinfo');

  // property painel test

  expect(detailInfo).toHaveTextContent('General1');
  expect(detailInfo).toHaveTextContent('textGeneral1');
  expect(detailInfo).toHaveTextContent('General2');
  expect(detailInfo).toHaveTextContent('Disponível');
  expect(detailInfo).toHaveTextContent('General3');
  expect(detailInfo).toHaveTextContent('31/05/2020');

  // property applications test

  expect(detailInfo).toHaveTextContent('Applications1');
  expect(detailInfo).toHaveTextContent('textApplications1');

  // property painelInfo

  expect(detailInfo).toHaveTextContent('painelInfo1');
  expect(detailInfo).toHaveTextContent('painelInfoText1');

  expect(detailInfo).toHaveTextContent('painelInfo2');
  expect(detailInfo).toHaveTextContent('painelInfoText2');

  // property painelSecondaryInfo

  expect(detailInfo).toHaveTextContent('painelSecondaryInfo1');
  expect(detailInfo).toHaveTextContent('painelSecondaryInfoText1');

  expect(detailInfo).toHaveTextContent('painelSecondaryInfo2');
  expect(detailInfo).toHaveTextContent('painelSecondaryInfoText2');
});
