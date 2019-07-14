import toLength, {toLength2016} from '../src/to-length-x';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};
const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

describe('toLength', function() {
  describe('basic', function() {
    it('toLength should be a function', function() {
      expect.assertions(1);
      expect(typeof toLength).toBe('function');
    });

    it('toLength2016 should be a function', function() {
      expect.assertions(1);
      expect(typeof toLength2016).toBe('function');
    });

    it('toLength should not be toLength2016', function() {
      expect.assertions(1);
      expect(toLength).not.toBe(toLength2016);
    });
  });

  describe('toLength2016', function() {
    it('should throw for uncoercible', function() {
      expect.assertions(1);
      expect(function() {
        return toLength2016(uncoercibleObject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should coerce object', function() {
      expect.assertions(1);
      expect(toLength2016(coercibleObject)).toBe(3, 'coercibleObject coerces to 3');
    });

    it('should coerce string', function() {
      expect.assertions(1);
      expect(toLength2016('42.5')).toBe(42, '"42.5" coerces to 42');
    });

    it('should convert to an integer', function() {
      expect.assertions(1);
      expect(toLength2016(7.3)).toBe(7, '7.3 converts to 7');
    });

    it('should convert negatives to +0', function() {
      expect.assertions(4);
      const negatives = [-0, -1, -42, -Infinity];

      negatives.forEach(function(negative) {
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(0, toLength2016(negative))).toBe(true, `${negative} coerces to +0`);
      });
    });

    it('should clamp to MAX_SAFE_INTEGER', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      expect(toLength2016(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      /* eslint-disable-next-line compat/compat */
      expect(toLength2016(Number.MAX_SAFE_INTEGER + 3)).toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });

  describe('toLength2018', function() {
    it('should throw for uncoercible', function() {
      expect.assertions(1);
      expect(function() {
        return toLength(uncoercibleObject);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should coerce object', function() {
      expect.assertions(1);
      expect(toLength(coercibleObject)).toBe(3, 'coercibleObject coerces to 3');
    });

    it('should coerce string', function() {
      expect.assertions(1);
      expect(toLength('42.5')).toBe(42, '"42.5" coerces to 42');
    });

    it('should convert to an integer', function() {
      expect.assertions(1);
      expect(toLength(7.3)).toBe(7, '7.3 converts to 7');
    });

    it('should convert negatives to +0', function() {
      expect.assertions(4);
      const negatives = [-0, -1, -42, -Infinity];

      negatives.forEach(function(negative) {
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(0, toLength(negative))).toBe(true, `${negative} coerces to +0`);
      });
    });

    it('should clamp to MAX_SAFE_INTEGER', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      expect(toLength(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER, '2^53 coerces to 2^53 - 1');
      /* eslint-disable-next-line compat/compat */
      expect(toLength(Number.MAX_SAFE_INTEGER + 3)).toBe(Number.MAX_SAFE_INTEGER, '2^53 + 2 coerces to 2^53 - 1');
    });
  });
});
