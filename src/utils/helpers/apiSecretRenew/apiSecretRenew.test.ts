import APISecretRenew from '.';

describe('APISecretRenew module tests', () => {
  test('should return random string with default values', () => {
    const testRandomString = APISecretRenew();

    expect(testRandomString).toHaveLength(36);
    expect(testRandomString).toMatch(
      /[A-Za-z\d]{8}-[A-Za-z\d]{4}-[A-Za-z\d]{4}-[A-Za-z\d]{4}-[A-Za-z\d]{12}/
    );
  });

  test('should return random string custom length', () => {
    const expectedLength = 48;
    const testRandomString = APISecretRenew(expectedLength);

    expect(testRandomString).toHaveLength(expectedLength);
  });

  test('should return random string custom length and custom blocks sizes', () => {
    const expectedLength = 30;
    const expectedBlocksSizes = [2, 4, 8, 16];

    const testRandomString = APISecretRenew(
      expectedLength,
      expectedBlocksSizes
    );

    const generatedBlocks = testRandomString.split('-');

    expectedBlocksSizes.forEach((breakpoint) => {
      expect(testRandomString.charAt(breakpoint)).toMatch('-');
    });

    expect(testRandomString).toHaveLength(expectedLength);
    expect(generatedBlocks).toHaveLength(expectedBlocksSizes.length + 1);
  });
});
