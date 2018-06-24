const NOTES = [5, 10, 20, 50]


const getMoney = (value, notes) => {
  const smallest = Math.min(...notes.filter(note => note <= value))

  if (value < smallest || notes.length === 0) {
    return []
  } else {
    const newValue = value - smallest
    const newNotes = newValue === smallest ? [smallest] : notes.slice(1)

    return [{ [smallest] : 1 }].concat(getMoney(newValue, newNotes))
  }
}

const withdraw = (value) =>
  getMoney(value, NOTES).reduce((acc, note) => {
    const existNote = Object.keys(acc).find(key => key === Object.keys(note)[0])

      acc[Object.keys(note)[0]] =!!existNote ? acc[Object.keys(note)[0]] + 1 : 1

    return acc
  }, {})

module.exports = { withdraw }
