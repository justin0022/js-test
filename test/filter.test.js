const {
  filterGreaterThan5,
  filterGreaterThanX
} = require('../filter.js')

test('filter out numbers greater than 5 from array', () => {
  expect(
    filterGreaterThan5([])
  ).toEqual([])
  expect(
    filterGreaterThan5([1, 2, 3, 4, 5, 6])
  ).toEqual([6])
  expect(
    filterGreaterThan5([-1, 0])
  ).toEqual([])
})

test('filter out numbers greater than x from array', () => {
  expect(
    filterGreaterThanX(0, [])
  ).toEqual([])
  expect(
    filterGreaterThanX(0, [-1, 0, 1])
  ).toEqual([1])
})