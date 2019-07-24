import toInteger from 'to-integer-x';

const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
const toLength = function toLength(value) {
  const len = toInteger(value);

  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

export default toLength;
