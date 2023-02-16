/**
 * BytesFormat script.
 * @module BytesFormat
 * @param {number} [bytes] - The file size in bytes.
 * @return {string} The file size formated generated in string.
 */

export const BytesFormat = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const unit = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const base = 1024;

  const expo = Math.floor(Math.log(bytes) / Math.log(base));
  const formatedFileSize = parseFloat(
    (bytes / Math.pow(base, expo)).toFixed(2)
  );

  return `${formatedFileSize} ${unit[expo]}`;
};

export default BytesFormat;
