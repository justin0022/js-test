const {
  filterObjectWithIdGreaterThan5,
} = require('../array.js')

test('filter out array of objects where object id is greater than 5', () => {
  expect(
    filterObjectWithIdGreaterThan5([])
  ).toEqual([])
  expect (
    filterObjectWithIdGreaterThan5(
      [
        { id: 4, name: 'Justin' },
        { id: 5, name: 'Jeff' },
        { id: 6, name: 'Michael' }
      ])
  ).toEqual([{ id: 6, name: 'Michael' }])
})
