const NOTES = [5, 10, 20, 50]

const getMoney = (value, notes) => {
  const biggest = Math.max(...notes)

  if (value === 0 || notes.length === 0) { return [] }
  else if (notes[0] === biggest && value >= biggest) { return [{ [notes[0]] : 1 }].concat(getMoney((value - biggest), notes)) }
  else if (notes[0] === biggest) { return getMoney(value, notes.slice(1).sort((a, b) => b - a)) }
  else if (value >= notes[0]) { return [{ [notes[0]] : 1 }].concat(getMoney((value - notes[0]), notes.slice(1).concat(notes[0]))) }
  else { return getMoney(value, notes.slice(1)) }
}

const withdraw = (value) =>
  getMoney(value, NOTES).reduce((acc, note) => {
    const existNote = Object.keys(acc).find(key => key === Object.keys(note)[0])

      acc[Object.keys(note)[0]] =!!existNote ? acc[Object.keys(note)[0]] + 1 : 1

    return acc
  }, {})

module.exports = { withdraw }
