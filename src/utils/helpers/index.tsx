import React from 'react';
export * from './apiSecretRenew';

const GetDateUTCMilisseconds = (mili: number) => {
  const date = new Date(0);

  date.setUTCMilliseconds(mili);

  return date;
};

const helpers = {
  GetDateUTCMilisseconds: GetDateUTCMilisseconds,
};

export default helpers;
