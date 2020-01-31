const {
  doubleNumbers
} = require('../map.js')

test('double every number in array', () => {
  expect(
    doubleNumbers([])
  ).toEqual([])
  expect (
    doubleNumbers([1, 2])
  ).toEqual([2, 4])
})
