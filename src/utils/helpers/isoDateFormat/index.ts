function ISODateFormat(isoDate: string): string {
  const rawDate = Date.parse(isoDate);
  const sendDate = new Date(rawDate);

  const date =
    sendDate.getDate() +
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
}

export default ISODateFormat;
