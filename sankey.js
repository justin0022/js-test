const { uniq } = require('ramda')

const sortedByTimeAndId = students => {
  return students.sort((a, b) => {
    const aId = Number(a.ID)
    const bId = Number(b.ID)

    const aTime = Number(a.Time)
    const bTime = Number(b.Time)

    if (aId < bId) {
      return -1
    } else if (aId > bId) {
      return 1
    } else {
      if (aTime < bTime) {
        return -1
      } else if (aTime > bTime) {
        return 1
      } else return 0
    }
  })
}

const createLink = (student1, student2) => {
  return { source: student1.name, target: student2.name, value: 1 }
}

const convertStudentsToLinks = students => {
  const sortByTimeAndId = sortedByTimeAndId(students)

  const links = []

  for (let i = 0; i < sortByTimeAndId.length - 1; i++) {
    const currentStudent = sortByTimeAndId[i]
    const nextStudent = sortByTimeAndId[i + 1]

    if (currentStudent.ID === nextStudent.ID) {
      links.push(createLink(currentStudent, nextStudent))
    }
  }

  return links
}

const aggregateValueOfLink = links => {
  const uniqueLinksWithValue = []

  links.forEach(currentLink => {
    const value = links.filter(link =>
      link.source === currentLink.source &&
      link.target === currentLink.target
    ).length
    uniqueLinksWithValue.push({ ...currentLink, value })
  })

  return uniq(uniqueLinksWithValue)
}

const generateUniqNodes = links => uniq(
  [
    ...links.map(link => link.source),
    ...links.map(link => link.target)
  ]
)

module.exports = {
  sortedByTimeAndId,
  convertStudentsToLinks,
  createLink,
  aggregateValueOfLink,
  generateUniqNodes
}
