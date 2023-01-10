import React from 'react';
import * as S from './style';
import { BiCard, BiListUl, BiFilterAlt } from 'react-icons/bi';
import FavViewContext from '../../../context/listViewPreference';

import ExtendedFilterOptions, { Options } from '../extendedFilterOptions';
//import { EndpointApplicationsListInterface as Endpoint } from '../../../utils/endpoints';

export interface iApiListOptions {
  triggerSearch(params: any): void;
  optionsFields?: Options[];
}

const ApiListOptions = (props: iApiListOptions) => {
  const { triggerSearch, optionsFields, ...rest } = props;
  const [options, setOptions] = React.useState<Options[]>([]);
  const [field, setField] = React.useState('');
  const {
    viewPreferenceState,
    toggleViewPreference,
    viewPreferenceOption,
    toggleViewOption,
  } = React.useContext(FavViewContext);

  const handleTriggerSearch = (o: Options[]) => {
    const params = { searchField: field };
    o.map((item) => {
      return Object.assign(params, { [item.fieldName]: item.value });
    });
    return triggerSearch(params);
  };

  return (
    <div {...rest}>
      <S.Container>
        <S.Input
          placeholder='Pesquisar'
          onChange={(e) => setField(e.currentTarget.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleTriggerSearch(options)}
        />
        <S.BtnWrapper>
          <S.Button onClick={() => handleTriggerSearch(options)}>
            {'Pesquisar'}
          </S.Button>
          {optionsFields && (
            <S.ButtonFilter
              onClick={() => toggleViewOption()}
              active={viewPreferenceOption === 'true'}
            >
              <BiFilterAlt />
            </S.ButtonFilter>
          )}

          <S.ButtonCard
            active={viewPreferenceState === 'card'}
            onClick={() => toggleViewPreference('card')}
          >
            <BiCard />
          </S.ButtonCard>
          <S.ButtonCard
            active={viewPreferenceState === 'list'}
            onClick={() => toggleViewPreference('list')}
          >
            <BiListUl width='12px' height='12px' />
          </S.ButtonCard>
        </S.BtnWrapper>
      </S.Container>
      <S.ExtendendFilter view={viewPreferenceOption}>
        <ExtendedFilterOptions
          params={optionsFields || []}
          callBack={(e) => setOptions(e)}
        />
      </S.ExtendendFilter>
    </div>
  );
};

export default ApiListOptions;
