<a href="https://travis-ci.org/Xotic750/to-length-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-length-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-length-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-length-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-length-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-length-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-length-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-length-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/to-length-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-length-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_to-length-x"></a>

## to-length-x

Shim for ToLength.

**See**: [7.1.15 ToLength ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-tolength)

### `module.exports(value)` ⇒ <code>\*</code> ⏏

<a name="module_to-length-x"></a>

### `to-length-x` ⇒ <code>\*</code>

Converts `value` to an integer suitable for use as the length of an
array-like object. (ES2019)

**Kind**: static property of [<code>to-length-x</code>](#module_to-length-x)  
**Returns**: <code>number</code> - Returns the converted integer.

| Param | Type            | Description           |
| ----- | --------------- | --------------------- |
| value | <code>\*</code> | The value to convert. |

**Example**

```js
var toLength = require('to-length-x').toLength2018;
toLength(3); // 3
toLength(Number.MIN_VALUE); // 0
toLength(Infinity); // Number.MAX_SAFE_INTEGER
toLength('3'); // 3
```
