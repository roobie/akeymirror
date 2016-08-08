'use strict';

var forceArray = require('force-array');

/**
 * Create an enum like object where the keys are the same as their values based
 * on the strings in the supplied array.
 *
 * @example:
 *
 *   var COLORS = aKeyMirror(['green', 'purple']);
 *   var aColor = COLORS.green;
 *   var isColorValid = !!COLORS[aColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  ['key1',     'key2']
 *   Output: { key1: key1, key2: key2 }
 *
 * @param {Array<String>} the array of enum values
 * @return {Object} the enumeration of the values.
 */
module.exports = function() {
  return forceArray.apply(null, arguments).reduce(function(obj, key) {
    obj[key] = key;
    return obj;
  }, {});
};
