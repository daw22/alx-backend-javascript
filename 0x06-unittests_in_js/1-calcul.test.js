const assert = require('assert');
const calculateNumber = require('./1-calcul.js');


describe('caluculateNumber', function() {
  describe('SUM', function() {
    it('returns correct sum', function () {
      const result = calculateNumber('SUM', 1, 3);
      assert.equal(result, 4);
    });
    it('rounds and returns correct sum', function () {
      const result = calculateNumber('SUM', 1.2, 3.7);
      assert.equal(result, 5);
    });
    it('returns correct sum', function () {
      const result = calculateNumber('SUM', 1.5, 3.7);
      assert.equal(result, 6);
    });
  });

  describe('SUBSTRACT', function() {
    it('returns correct sum', function () {
      const result = calculateNumber('SUBSTRACT', 1, 3);
      assert.equal(result, -2);
    });
    it('rounds and returns correct sum', function () {
      const result = calculateNumber('SUBSTRACT', 1.2, 3.7);
      assert.equal(result, -3);
    });
    it('returns correct sum', function () {
      const result = calculateNumber('SUBSTRACT', 1.5, 3.7);
      assert.equal(result, -2);
    });
  });

  describe('DIVIDE', function() {
    it('returns correct division', function () {
      const result = calculateNumber('DIVIDE', 12, 3);
      assert.equal(result, 4);
    });
    it('rounds and returns correct division', function () {
      const result = calculateNumber('DIVIDE', 3.8, 3.7);
      assert.equal(result, 1);
    });
    it('rounds operands, returns correct division', function () {
      const result = calculateNumber('DIVIDE', 9.4, 3.1);
      assert.equal(result, 3);
    });
    it ('returns "Error" on a division by zero', function () {
      const result = calculateNumber('DIVIDE', 2.3, 0.4);
      assert.strictEqual(result, 'Error');
    });
  });
});
