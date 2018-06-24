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

  describe('three notes', () => {
    it('returns one of 5, one of 10 and one of 20 when ask 35', () => {
      expect(withdraw(35)).toEqual({ '5': 1, '10': 1, '20': 1 })
    })
  })

  describe('four notes', () => {
    it('returns one of 5, one of 10, one of 20 and one of 50 when ask 85', () => {
      expect(withdraw(85)).toEqual({ '5': 1, '10': 1, '20': 1, '50': 1 })
    })
  })
})
