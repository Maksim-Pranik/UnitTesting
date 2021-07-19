const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('function multiply', function () {
  let product;
  beforeEach(function () {
    product = new Calculator();
  });
  afterEach(function () {
    product = null;
  });
  it('should return 20 when orerators are 4 and 5', function () {
    expect(product.multiply(4, 5)).to.be.equal(20);
  });
  it('should return -30 when orerators are -5 and 6', function () {
    expect(product.multiply(-5, 6)).to.be.equal(-30);
  });
  it('should return 0 when orerators are 0 and 6', function () {
    expect(product.multiply(0, 6)).to.be.equal(0);
  });
});