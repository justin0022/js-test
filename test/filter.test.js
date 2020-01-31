const {
  filterGreaterThan5
} = require('../filter.js')

test('filter out numbers great than 5 from array', () => {
  expect(
    filterGreaterThan5([])
  ).toEqual([])
  expect(
    filterGreaterThan5([1, 2, 3, 4, 5, 6])
  ).toEqual([6])
})
