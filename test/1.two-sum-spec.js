var assert = require('assert');
const { twoSum } = require('../src/1.two-sum');
const _ = require('lodash');

describe('two sum tests', () => {
  const testData = [
    {
      input: {
        nums: [2, 7, 11, 15],
        target: 9
      },
      expectedResult: [0, 1]
    },
    {
      input: {
        nums: [1, 7, 100],
        target: 107
      },
      expectedResult: [1, 2]
    }
  ]

  _.forEach(testData, ({ input, expectedResult }) => {
    it(`${JSON.stringify(input)} => ${expectedResult}`, () => {
      assert.deepEqual(twoSum(input.nums, input.target), expectedResult);
    })
  });

});