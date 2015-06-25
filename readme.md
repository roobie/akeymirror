# akeymirror
like [keymirror](https://www.npmjs.com/package/keymirror), but accepts an array instead of an object with unnecessary `null`s


Create an enum like object where the keys are the same as their values based
on the strings in the supplied array.

```javascript
var COLORS = aKeyMirror([
  'green',
  'purple'
]);
var aColor = COLORS.green;
var isColorValid = !!COLORS[aColor];
```
The last line could not be performed if the values of the generated enum were
not equal to their keys.

```javascript
Input:  ['key1',     'key2']
Output: { key1: key1, key2: key2 }
```
