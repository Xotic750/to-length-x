/**
 * @file Shim for ToLength.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tolength|7.1.15 ToLength ( argument )}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-length-x
 */

'use strict';

var libToInteger = require('to-integer-x');
var toInteger2016 = libToInteger.toInteger2016;
var toInteger2018 = libToInteger.toInteger2018;
var MAX_SAFE_INTEGER = require('max-safe-integer');

var $toLength2016 = function toLength2016(value) {
  var len = toInteger2016(value);
  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

var $toLength2018 = function toLength2018(value) {
  var len = toInteger2018(value);
  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

module.exports = {
  /**
   * Reference to toLength2018.
   */
  toLength: $toLength2018,

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object. (ES2016)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   * var toLength = require('to-length-x').toLength2016;
   * toLength(3); // 3
   * toLength(Number.MIN_VALUE); // 0
   * toLength(Infinity); // Number.MAX_SAFE_INTEGER
   * toLength('3'); // 3
   */
  toLength2016: $toLength2016,

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object. (ES2018)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   * var toLength = require('to-length-x').toLength2018;
   * toLength(3); // 3
   * toLength(Number.MIN_VALUE); // 0
   * toLength(Infinity); // Number.MAX_SAFE_INTEGER
   * toLength('3'); // 3
   */
  toLength2018: $toLength2018
};
