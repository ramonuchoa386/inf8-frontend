import React from 'react';
import * as S from './style';

export interface iDropList {
  items?: number[] | string[];
  customItems?: customItem[];
  selected: number | string;
  setItem(n: number | string): any;
  defautItem?: string;
  styledType?: string;
  styledSize?: string;
}

export interface customItem {
  text: string;
  value: string;
}

const DropList = (props: iDropList) => {
  const { items, selected, customItems, setItem } = props;

  return (
    <S.Select
      defaultValue={selected}
      onChange={(e) => setItem(e.currentTarget.value)}
      styledSize={props.styledSize ? props.styledSize : 'small'}
      styledType={props.styledType ? props.styledType : 'default'}
    >
      {items &&
        !customItems &&
        items.map((item, index) => (
          <S.Option key={index} value={item}>
            {item}
          </S.Option>
        ))}
      {!items &&
        customItems &&
        customItems.map((item, index) => (
          <S.Option key={index} value={item.value}>
            {item.text}
          </S.Option>
        ))}
    </S.Select>
  );
};

export default DropList;
