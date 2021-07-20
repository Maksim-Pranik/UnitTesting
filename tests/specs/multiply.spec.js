const { expect } = require('chai');

const calculator = new Calculator();

describe('function multiply', function () {
  it('should return 20 when operators are 4 and 5', function () {
    expect(calculator.multiply(4, 5)).to.be.equal(20);
  });

  it('should return -30 when operators are -5 and 6', function () {
    expect(calculator.multiply(-5, 6)).to.be.equal(-30);
  });

  it('should return 0 when operators are 0 and 6', function () {
    expect(calculator.multiply(0, 6)).to.be.equal(0);
  });
});
