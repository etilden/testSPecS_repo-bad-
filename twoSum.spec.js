const { expect } = require('chai')
 const { assert } = require('chai')
 const twoSum = require('./twoSum')

/*
   todo list:

   2. return array
   3. if the sum of numbers in the array can not equal the goal then returns []
   4. else return array of correct numbers
*/

describe('Two Sum', () => {
    it('inputs must not be null', () => {
        const noArgs = twoSum();
        const arrArg = twoSum([2]);
        const goalArg = twoSum(null, 5);
        return assert(!noArgs && !arrArg && !goalArg, 'arg');
    });
    it ('array.length must be at least 2', () => {
        return assert(!twoSum([1], 5), 'yo ho')
    }); 
    it ('return value should be an array', () => {
        return assert(Array.isArray(twoSum([1, 2], 3)))
    }) 
})