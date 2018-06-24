const { withdraw } = require( './dojo')


describe('Household mix', () => {
  describe('one note', () => {
    it('returns 5 when ask 5', () => {
      expect(withdraw(5)).toEqual({ '5': 1 })
    })
  })
})
