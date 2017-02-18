/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, it, returnExports */

(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var toLength;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    toLength = require('../../index.js');
  } else {
    toLength = returnExports;
  }

  describe('toLength', function () {
    it('Basic', function () {
      var coercibleObject = {
        toString: function () {
          return 42;
        },
        valueOf: function () {
          return 3;
        }
      };
      var uncoercibleObject = {
        toString: function () {
          return {};
        },
        valueOf: function () {
          return {};
        }
      };
      expect(function () {
        return toLength(uncoercibleObject);
      }).toThrow();
      expect(toLength(coercibleObject)).toBe(3, 'coercibleObject coerces to 3');
      expect(toLength('42.5')).toBe(42, '"42.5" coerces to 42');
      expect(toLength(7.3)).toBe(7, '7.3 coerces to 7');
      [-0, -1, -42, -Infinity].forEach(function (negative) {
        expect(Object.is(0, toLength(negative))).toBe(true, negative + ' coerces to +0');
      });
      expect(toLength(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      expect(toLength(Number.MAX_SAFE_INTEGER + 3)).toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });
}());
