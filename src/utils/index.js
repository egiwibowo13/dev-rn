
export const noop = () => {};

export const getTestID = (testID = '') => {
    const testId = testID.toLowerCase().trim().replace(/\s+/g, '-');
    return {
        testID: testId,
        accessibilityLabel: testId,
      };
};

export function isEmpty(value) {
  return value === null || value === undefined || String(value).trim() === '';
}

export function isObjectEmpty(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}

export const getNumberOnly = (string = '') => string.replace(/[^\d]+/g, '');

// eslint-disable-next-line no-useless-escape
export const getNumberAllowNegative = (string = '') => string.replace(/[^-?\.?\d*]+/g, '');

export const convertToNumber = (string = '') => {
  const isAlreadyNumber = typeof string === 'number';
  const isString = typeof string === 'string';
  if (isAlreadyNumber) return string;
  else if (!isString) return 0;
  const numberString = getNumberOnly(string);
  return isEmpty(numberString) ? 0 : parseFloat(numberString);
};