const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('function add', function () {
  let summ;
  beforeEach(function () {
    summ = new Calculator();
  });
  afterEach(function () {
    summ = null;
  });
  it('should return 9 when orerators are 4 and 5', function () {
    expect(summ.add(4, 5)).to.be.equal(9);
  });
  it('should return 1 when orerators are -5 and 6', function () {
    expect(summ.add(-5, 6)).to.be.equal(1);
  });
});
