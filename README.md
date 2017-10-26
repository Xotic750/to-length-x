<a href="https://travis-ci.org/Xotic750/to-length-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/to-length-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/to-length-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-length-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/to-length-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-length-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-length-x" title="npm version">
<img src="https://badge.fury.io/js/to-length-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_to-length-x"></a>

## to-length-x
Shim for ToLength.

**See**: [7.1.15 ToLength ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-tolength)  
**Version**: 3.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  

* [to-length-x](#module_to-length-x)
    * [`.toLength`](#module_to-length-x.toLength)
    * [`.toLength2016`](#module_to-length-x.toLength2016) ⇒ <code>number</code>
    * [`.toLength2018`](#module_to-length-x.toLength2018) ⇒ <code>number</code>

<a name="module_to-length-x.toLength"></a>

### `to-length-x.toLength`
Reference to toLength2018.

**Kind**: static property of [<code>to-length-x</code>](#module_to-length-x)  
<a name="module_to-length-x.toLength2016"></a>

### `to-length-x.toLength2016` ⇒ <code>number</code>
Converts `value` to an integer suitable for use as the length of an
array-like object. (ES2016)

**Kind**: static property of [<code>to-length-x</code>](#module_to-length-x)  
**Returns**: <code>number</code> - Returns the converted integer.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

**Example**  
```js
var toLength = require('to-length-x').toLength2016;
toLength(3); // 3
toLength(Number.MIN_VALUE); // 0
toLength(Infinity); // Number.MAX_SAFE_INTEGER
toLength('3'); // 3
```
<a name="module_to-length-x.toLength2018"></a>

### `to-length-x.toLength2018` ⇒ <code>number</code>
Converts `value` to an integer suitable for use as the length of an
array-like object. (ES2018)

**Kind**: static property of [<code>to-length-x</code>](#module_to-length-x)  
**Returns**: <code>number</code> - Returns the converted integer.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

**Example**  
```js
var toLength = require('to-length-x').toLength2018;
toLength(3); // 3
toLength(Number.MIN_VALUE); // 0
toLength(Infinity); // Number.MAX_SAFE_INTEGER
toLength('3'); // 3
```
