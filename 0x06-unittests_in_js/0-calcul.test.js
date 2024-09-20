const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('returns correct sum', function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });
  it('rounds and returns correct sum', function () {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });
  it('returns correct sum', function () {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
