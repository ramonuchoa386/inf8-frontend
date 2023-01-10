/**
 * APISecretRenew script.
 * @module APISecretRenew
 * @param {number} [size=36] - The string length. Default value is 36
 * @param {number[]} [blocks=[8, 13, 18, 23]] - The list of random string blocks length. Default value is [8, 13, 18, 23]
 * @return {string} The string generated.
 */

export const APISecretRenew = (size?: number, blocks?: number[]): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomArray = Array.from({ length: size || 36 }, (char, index) => {
    if (
      index ===
      (blocks !== undefined ? blocks : [8, 13, 18, 23]).find(
        (blockSize) => blockSize === index
      )
    ) {
      return (char = '-');
    } else {
      return (char = characters[Math.floor(Math.random() * characters.length)]);
    }
  });
  const randomString = randomArray.join('');

  return randomString;
};

export default APISecretRenew;
