const filterGreaterThan5 = array => {
  return array.filter(x => x > 5)
}

const filterGreaterThanX = (x, array) => {
  return array.filter(num => num > x)
}

module.exports = {
  filterGreaterThan5,
  filterGreaterThanX
}
