/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
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
    toLength = require('../../index.js');
  } else {
    toLength = returnExports;
  }

  describe('toLength', function () {
    it('Basic', function () {
      var coercibleObject = {
        valueOf: function () {
          return 3;
        },
        toString: function () {
          return 42;
        }
      };
      var uncoercibleObject = {
        valueOf: function () {
          return {};
        },
        toString: function () {
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
        expect(Object.is(0, toLength(negative)))
          .toBe(true, negative + ' coerces to +0');
      });
      expect(toLength(Number.MAX_SAFE_INTEGER + 1))
        .toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      expect(toLength(Number.MAX_SAFE_INTEGER + 3))
        .toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });
}());
