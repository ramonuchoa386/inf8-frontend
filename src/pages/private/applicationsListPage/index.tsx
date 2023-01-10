import React, { useState } from 'react';
import { EndpointApplicationsListInterface } from '../../../utils/endpoints';
import { ContentWrapper, DataViewControl } from '../../../components/templates';
import { ApplicationStatusText } from '../../../utils/enums';
import { ITableData } from '../../../components/molecules/table/table.interface';

const ApplicationListPage = () => {
  const [tableData] = useState<ITableData>({
    headers: [
      { id: 1, value: 'Nome' },
      { id: 2, value: 'Descrição' },
      { id: 3, value: 'Status' },
    ],
    rows: [],
  });

  return (
    <ContentWrapper pageTitle='Applications'>
      <h2>Applications</h2>
      <DataViewControl
        qtdItems={25}
        tableData={tableData}
        cardData={[]}
        handleRequest={(params: EndpointApplicationsListInterface) =>
          console.log(params) as never
        }
        loading={false}
        optionsFields={[
          {
            fieldName: 'status',
            fieldType: 'customList',
            label: 'Estado',
            customListParams: {
              listItems: [
                { text: 'Selecionar', value: '' },
                { text: ApplicationStatusText['ENABLED'], value: 'ENABLED' },
                { text: ApplicationStatusText['DISABLED'], value: 'DISABLED' },
                {
                  text: ApplicationStatusText['APPLICATION_PENDING_APPROVAL'],
                  value: 'APPLICATION_PENDING_APPROVAL',
                },
              ],
              listItemDefault: 'Selecionar',
            },
          },
        ]}
      />
    </ContentWrapper>
  );
};

export default ApplicationListPage;
