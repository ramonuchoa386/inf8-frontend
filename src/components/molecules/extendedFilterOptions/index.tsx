import React, { useState } from 'react';
import { customItem } from '../droplist';
import * as S from './style';

export interface ExtendedFilterOptionsParams {
  params: Options[];
  callBack(n: Options[]): void;
}

export interface Options {
  fieldName: string;
  fieldType: 'input' | 'list' | 'customList';
  placeHolder?: string;
  label?: string;
  value?: string;
  listParams?: {
    listItems: string[];
    listItemDefault: string;
  };
  customListParams?: {
    listItems: customItem[];
    listItemDefault: string;
  };
}

const ExtendedFilterOptions = (props: ExtendedFilterOptionsParams) => {
  const [objDataList, setObjectDataList] = useState<Options[]>(props.params);
  const [refresh, setRefresh] = useState<boolean>(false);

  const updateObj = async (obj: Options) => {
    const dataObj = objDataList;

    if (dataObj) {
      if (
        dataObj.find((item) => {
          return item.fieldName.toLowerCase() == obj.fieldName.toLowerCase();
        }) !== undefined
      ) {
        // true

        const index = dataObj.findIndex((item) => {
          return item.fieldName == obj.fieldName;
        });

        dataObj.splice(index, 1, obj);
      } else {
        // false
        dataObj.push(obj);
      }
      setObjectDataList(dataObj);
    } else {
      const t: Options[] = [{ ...obj }];
      setObjectDataList(t);
    }

    dataObj && props.callBack(dataObj);
  };

  const removeFromObj = (field: string) => {
    const dataObj = objDataList;

    if (dataObj?.find((obj) => obj.fieldName === field)) {
      const index = dataObj?.findIndex((obj) => obj.fieldName === field);

      dataObj.splice(index, 1);
      setObjectDataList(dataObj);
    } else {
      return;
    }

    dataObj && props.callBack(dataObj);
  };

  const clearFields = async () => {
    setRefresh(true);
    props.callBack([]);
    setTimeout(() => setRefresh(false), 750);
  };

  return (
    <>
      {!refresh ? (
        <S.Main>
          <S.Container>
            {props.params.map((item, index) => {
              return (
                <S.Wrapper key={index}>
                  <S.Container>
                    <S.label>{item.label}</S.label>
                  </S.Container>
                  <S.Container>
                    {item.fieldType === 'input' && (
                      <S.InputText
                        placeholder={item.placeHolder}
                        key={index}
                        onChange={(e) =>
                          updateObj({ ...item, value: e.currentTarget.value })
                        }
                        value={item.value}
                      />
                    )}

                    {item.fieldType === 'list' && (
                      <S.List
                        items={
                          item.listParams ? item.listParams.listItems : ['']
                        }
                        selected={
                          item.listParams
                            ? item.value
                              ? item.value
                              : item.listParams.listItems[0]
                            : ''
                        }
                        setItem={(n) =>
                          !(n === item.listParams?.listItemDefault)
                            ? updateObj({ ...item, value: `${n}` })
                            : removeFromObj(item.fieldName)
                        }
                        key={index}
                      />
                    )}

                    {item.fieldType === 'customList' && (
                      <S.List
                        customItems={
                          item.customListParams
                            ? item.customListParams.listItems
                            : []
                        }
                        selected={
                          item.customListParams
                            ? item.value
                              ? item.value
                              : item.customListParams.listItems[0].text
                            : ''
                        }
                        setItem={(n) =>
                          !(n === item.listParams?.listItemDefault)
                            ? updateObj({ ...item, value: `${n}` })
                            : removeFromObj(item.fieldName)
                        }
                        key={index}
                      />
                    )}
                  </S.Container>
                </S.Wrapper>
              );
            })}
          </S.Container>
          <div>
            <S.Button onClick={() => clearFields()}>Limpar Filtros</S.Button>
          </div>
        </S.Main>
      ) : (
        <>Carregando...</>
      )}
    </>
  );
};

export default ExtendedFilterOptions;
