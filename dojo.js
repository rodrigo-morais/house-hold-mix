const NOTES = [5, 10, 20, 50]


const getMoney = (value, notes) => {
  const smallest = Math.min(...notes.filter(note => note <= value))

  if (value === 0) {
    return []
  } else if(notes.length === 0) {
    return getBigMoney(value, NOTES.slice().reverse())
  } else {
    const newValue = value - smallest
    const newNotes = newValue === smallest ? [smallest] : notes.slice(1)

    return [{ [smallest] : 1 }].concat(getMoney(newValue, newNotes))
  }
}

const getBigMoney = (value, notes) => {
  if (value === 0 || notes.length === 0) {
    return []
  } else if (value >= notes[0]) {
    return [{ [notes[0]] : 1 }].concat(getBigMoney((value - notes[0]), notes))
  }
  else {
    return getBigMoney(value, notes.slice(1))
  }
}

const withdraw = (value) =>
  getMoney(value, NOTES).reduce((acc, note) => {
    const existNote = Object.keys(acc).find(key => key === Object.keys(note)[0])

      acc[Object.keys(note)[0]] =!!existNote ? acc[Object.keys(note)[0]] + 1 : 1

    return acc
  }, {})

module.exports = { withdraw }
