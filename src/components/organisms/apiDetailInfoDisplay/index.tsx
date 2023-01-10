import React, { ReactNode } from 'react';
import * as S from './style';
import helpers from '../../../utils/helpers/index';
import { StatusType } from '../../../utils/types';

export interface iApiDetailInfoDisplay {
  painel: iPainelGeneral[];
  applications: iPainelApplications;
  painelInfo: iPainelInfo[];
  painelSecondaryInfo: iPainelInfo[];
}

interface iPainelGeneral extends iModelo {
  type?: 'healthCheck' | 'Date';
}

type iPainelApplications = iModelo;

interface iPainelInfo extends iModelo {
  tag?: boolean;
}

export interface iModelo {
  title: string;
  text: string | ReactNode;
}

const BodyInfoDisplay = ({
  title,
  detail,
  tag,
}: {
  title?: string;
  detail?: string | ReactNode;
  tag?: boolean;
}) => {
  return (
    <S.BodyDisplayWrapper>
      <S.bodyTitle>{title}</S.bodyTitle>
      <S.bodyDescription tag={tag}>{detail}</S.bodyDescription>
    </S.BodyDisplayWrapper>
  );
};

const ApiDetailInfoDisplay = (props: iApiDetailInfoDisplay) => {
  const typeCheck: ReactNode = <></>;

  return (
    <S.Container>
      <S.Card>
        <table>
          <tbody>
            <tr>
              <td>
                <S.InfoDisplay>
                  {props.painel.map((value, index) => (
                    <S.Main key={index}>
                      <S.Title>{value.title}</S.Title>
                      {!value.type && (
                        <S.InfoContainer>
                          <div>{value.text}</div>
                        </S.InfoContainer>
                      )}
                      {value.type === 'healthCheck' && (
                        <S.InfoContainer>
                          <S.HealthCheck
                            status={value.text as StatusType}
                            size='big'
                          />
                        </S.InfoContainer>
                      )}
                      {value.type === 'Date' &&
                        typeof value.text !== typeof typeCheck && (
                          <S.InfoContainer>
                            <div>
                              {value.type === 'Date' &&
                                value.text !== typeof typeCheck &&
                                helpers
                                  .GetDateUTCMilisseconds(value.text as any)
                                  .toLocaleDateString('pt-br')}
                            </div>
                          </S.InfoContainer>
                        )}
                    </S.Main>
                  ))}
                </S.InfoDisplay>
              </td>
              <td>
                <S.InfoDisplay>
                  {props.applications && (
                    <S.Main>
                      <S.Title>{props.applications.title}</S.Title>
                      <S.InfoContainer>
                        <div>{props.applications.text}</div>
                      </S.InfoContainer>
                    </S.Main>
                  )}
                </S.InfoDisplay>
              </td>
            </tr>
            <tr>
              <td>
                <S.InfoDisplay column>
                  {props.painelInfo && (
                    <>
                      {props.painelInfo.map((data, index) => (
                        <BodyInfoDisplay
                          title={data.title}
                          detail={data.text}
                          tag={data.tag}
                          key={index}
                        />
                      ))}
                    </>
                  )}
                </S.InfoDisplay>
              </td>
              <td>
                <S.InfoDisplay>
                  {props.painelSecondaryInfo && (
                    <>
                      {props.painelSecondaryInfo.map((data, index) => (
                        <BodyInfoDisplay
                          title={data.title}
                          detail={data.text}
                          tag={data.tag}
                          key={index}
                        />
                      ))}
                    </>
                  )}
                </S.InfoDisplay>
              </td>
            </tr>
          </tbody>
        </table>
      </S.Card>
    </S.Container>
  );
};

export default ApiDetailInfoDisplay;
