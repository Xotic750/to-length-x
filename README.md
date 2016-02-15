<a name="module_to-length-x"></a>
## to-length-x
<a href="https://travis-ci.org/Xotic750/to-length-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/to-length-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-length-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-length-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/to-length-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-length-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-length-x" title="npm version">
<img src="https://badge.fury.io/js/to-length-x.svg"
alt="npm version" height="18">
</a>

toLength module.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.5  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_to-length-x--module.exports"></a>
### `module.exports(value)` ⇒ <code>number</code> ⏏
Converts `value` to an integer suitable for use as the length of an
array-like object.

**Kind**: Exported function  
**Returns**: <code>number</code> - Returns the converted integer.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

**Example**  
```js
var toLength = require('to-length-x');
toLength(3); // 3
toLength(Number.MIN_VALUE); // 0
toLength(Infinity); // Number.MAX_SAFE_INTEGER
toLength('3'); // 3
```
