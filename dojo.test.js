const { withdraw } = require( './dojo')


describe('Household mix', () => {
  describe('one note', () => {
    it('returns 5 when ask 5', () => {
      expect(withdraw(5)).toEqual({ '5': 1 })
    })
  })

  describe('two notes', () => {
    it('returns two of 5 when ask 10', () => {
      expect(withdraw(10)).toEqual({ '5': 2 })
    })

    it('returns one of 5 and one of 10 when ask 15', () => {
      expect(withdraw(15)).toEqual({ '5': 1, '10': 1 })
    })
  })
})
