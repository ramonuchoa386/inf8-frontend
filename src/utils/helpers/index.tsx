import React from 'react';
import ISODateFormat from './isoDateFormat';
import BytesFormat from './bytesFormat';

const GetDateUTCMilisseconds = (mili: number) => {
  const date = new Date(0);

  date.setUTCMilliseconds(mili);

  return date;
};

const helpers = {
  GetDateUTCMilisseconds: GetDateUTCMilisseconds,
  ISODateFormat,
  BytesFormat,
};

export default helpers;
