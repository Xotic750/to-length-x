import toInteger, {toInteger2016} from 'to-integer-x';
import MAX_SAFE_INTEGER from 'max-safe-integer';

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
export function toLength2016(value) {
  const len = toInteger2016(value);

  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
}

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
const toLength2018 = function toLength2018(value) {
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

export default toLength2018;
