import React from 'react';
export * from './apiSecretRenew';
export * from './isoDateFormat';

const GetDateUTCMilisseconds = (mili: number) => {
  const date = new Date(0);

  date.setUTCMilliseconds(mili);

  return date;
};

const helpers = {
  GetDateUTCMilisseconds: GetDateUTCMilisseconds,
};

export default helpers;
