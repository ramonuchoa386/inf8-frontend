/**
 * ISODateFormat script.
 * @module ISODateFormat
 * @param {string} [isoDate] - The data in ISO format.
 * @return {string} The timestamp in 'DD/MM/AA HH:MM:SS' format.
 */

export const ISODateFormat = (isoDate: string): string => {
  const rawDate = Date.parse(isoDate);
  const sendDate = new Date(rawDate);

  const date =
    ('0' + sendDate.getDate()).slice(-2) +
    '/' +
    ('0' + (sendDate.getMonth() + 1)).slice(-2) +
    '/' +
    sendDate.getFullYear().toString().slice(-2);
  const hour =
    sendDate.getHours() +
    ':' +
    ('0' + sendDate.getMinutes()).slice(-2) +
    ':' +
    ('0' + sendDate.getSeconds()).slice(-2);

  return date + ' ' + hour;
};

export default ISODateFormat;
