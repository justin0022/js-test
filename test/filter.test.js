const {
  filterGreaterThan5
} = require('../filter.js')

test('filter out numbers great than 5 from array', () => {
  expect(filterGreaterThan5([])).toEqual([])
})
