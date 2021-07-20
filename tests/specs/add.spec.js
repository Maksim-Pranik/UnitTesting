const Calculator = require('../../app/calculator');
const { expect } = require('chai');

const calculator = new Calculator();

describe('function add', function () {
  it('should return 9 when operators are 4 and 5', function () {
    expect(calculator.add(4, 5)).to.be.equal(9);
  });

  it('should return 1 when operators are -5 and 6', function () {
    expect(calculator.add(-5, 6)).to.be.equal(1);
  });
});

