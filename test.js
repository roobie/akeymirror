var assert = require('assert');
var aKeyMirror = require('./');

assert.deepEqual(aKeyMirror('a'), {
  a: 'a'
});

assert.deepEqual(aKeyMirror('a', 'b'), {
  a: 'a',
  b: 'b'
});

assert.deepEqual(aKeyMirror(['a', 'b']), {
  a: 'a',
  b: 'b'
});

assert.deepEqual(aKeyMirror(['a', 'b'], 'c'), {
  a: 'a',
  b: 'b',
  c: 'c'
});

assert.deepEqual(aKeyMirror(['a', 'b'], ['c', 'd']), {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd'
});
