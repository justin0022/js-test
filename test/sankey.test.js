const { sortedByTimeAndId, convertStudentsToLinks, createLink, aggregateValueOfLink, generateUniqNodes } = require('../sankey')

test('first sort by ID, then sort by time', () => {
  expect(sortedByTimeAndId([
    {
      ID: '1',
      Time: '201109'
    },
    {
      ID: '1',
      Time: '201009'
    }
  ])).toEqual([
    {
      ID: '1',
      Time: '201009'
    },
    {
      ID: '1',
      Time: '201109'
    }
  ])
  expect(sortedByTimeAndId([
    {
      ID: '2',
      Time: '201009'
    },
    {
      ID: '1',
      Time: '201109'
    }
  ])).toEqual([
    {
      ID: '1',
      Time: '201109'
    },
    {
      ID: '2',
      Time: '201009'
    }]
  )
})

test('take as input array of student objects and create the links', () => {
  expect(convertStudentsToLinks([
    {
      ID: '1',
      Time: '201009',
      Status: 'Enrolled',
      Faculty: 'Arts',
      name: '201009Enrolled'
    },
    {
      ID: '1',
      Time: '201109',
      Status: 'Enrolled',
      Faculty: 'Arts',
      name: '201109Enrolled'
    },
    {
      ID: '1',
      Time: '201209',
      Status: 'Enrolled',
      Faculty: 'Arts',
      name: '201209Enrolled'
    },
    {
      ID: '1',
      Time: '201309',
      Status: 'Enrolled',
      Faculty: 'Arts',
      name: '201309Enrolled'
    },
    {
      ID: '1',
      Time: '201409',
      Status: 'Enrolled',
      Faculty: 'Arts',
      name: '201409Enrolled'
    }
  ])).toEqual(
    [
      { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
      { source: '201109Enrolled', target: '201209Enrolled', value: 1 },
      { source: '201209Enrolled', target: '201309Enrolled', value: 1 },
      { source: '201309Enrolled', target: '201409Enrolled', value: 1 }
    ]
  )
})

test('createLink takes two student enrolment objects and returns a link object', () => {
  expect(createLink({
    ID: '1',
    Time: '201009',
    Status: 'Enrolled',
    Faculty: 'Arts',
    name: '201009Enrolled'
  },
  {
    ID: '1',
    Time: '201109',
    Status: 'Enrolled',
    Faculty: 'Arts',
    name: '201109Enrolled'
  })).toEqual({ source: '201009Enrolled', target: '201109Enrolled', value: 1 })
})

test('aggregateValueOfLink takes links and returns only unique links with values incremented', () => {
  expect(aggregateValueOfLink([
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 }
  ])).toEqual([{ source: '201009Enrolled', target: '201109Enrolled', value: 2 }])

  expect(aggregateValueOfLink([
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
    { source: '201109Enrolled', target: '201209Enrolled', value: 1 }
  ])).toEqual([
    { source: '201009Enrolled', target: '201109Enrolled', value: 2 },
    { source: '201109Enrolled', target: '201209Enrolled', value: 1 }
  ])
})

test('generateUniqNodes takes as input links and returns uniq nodes', () => {
  expect(generateUniqNodes([
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
    { source: '201009Enrolled', target: '201109Enrolled', value: 1 },
    { source: '201109Enrolled', target: '201209Enrolled', value: 1 }
  ])).toEqual([
    '201009Enrolled',
    '201109Enrolled',
    '201209Enrolled'
  ])
})
