'use strict';

var lib;
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
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var toLength = lib.toLength;
var toLength2016 = lib.toLength2016;
var toLength2018 = lib.toLength2018;

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

describe('toLength', function () {
  describe('basic', function () {
    it('toLength should be a function', function () {
      expect(typeof toLength).toBe('function');
    });

    it('toLength2016 should be a function', function () {
      expect(typeof toLength2016).toBe('function');
    });

    it('toLength should not be toLength2016', function () {
      expect(toLength).not.toBe(toLength2016);
    });

    it('toLength should be toLength2018', function () {
      expect(toLength).toBe(toLength2018);
    });
  });

  describe('toLength2016', function () {
    it('should throw for uncoercible', function () {
      expect(function () {
        return toLength2016(uncoercibleObject);
      }).toThrow();
    });

    it('should coerce object', function () {
      expect(toLength2016(coercibleObject)).toBe(3, 'coercibleObject coerces to 3');
    });

    it('should coerce string', function () {
      expect(toLength2016('42.5')).toBe(42, '"42.5" coerces to 42');
    });

    it('should convert to an integer', function () {
      expect(toLength2016(7.3)).toBe(7, '7.3 converts to 7');
    });

    it('should convert negatives to +0', function () {
      var negatives = [
        -0,
        -1,
        -42,
        -Infinity
      ];

      negatives.forEach(function (negative) {
        expect(Object.is(0, toLength2016(negative))).toBe(true, negative + ' coerces to +0');
      });
    });

    it('should clamp to MAX_SAFE_INTEGER', function () {
      expect(toLength2016(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      expect(toLength2016(Number.MAX_SAFE_INTEGER + 3)).toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });

  describe('toLength2018', function () {
    it('should throw for uncoercible', function () {
      expect(function () {
        return toLength2018(uncoercibleObject);
      }).toThrow();
    });

    it('should coerce object', function () {
      expect(toLength2018(coercibleObject)).toBe(3, 'coercibleObject coerces to 3');
    });

    it('should coerce string', function () {
      expect(toLength2018('42.5')).toBe(42, '"42.5" coerces to 42');
    });

    it('should convert to an integer', function () {
      expect(toLength2018(7.3)).toBe(7, '7.3 converts to 7');
    });

    it('should convert negatives to +0', function () {
      var negatives = [
        -0,
        -1,
        -42,
        -Infinity
      ];

      negatives.forEach(function (negative) {
        expect(Object.is(0, toLength2018(negative))).toBe(true, negative + ' coerces to +0');
      });
    });

    it('should clamp to MAX_SAFE_INTEGER', function () {
      expect(toLength2018(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      expect(toLength2018(Number.MAX_SAFE_INTEGER + 3)).toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });
});
