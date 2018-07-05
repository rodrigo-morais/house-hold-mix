const { withdraw } = require( './dojo')


describe('Household mix', () => {
  describe('from small notes', () => {
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

    describe('all notes', () => {
      it('returns one of every note when ask 85', () => {
        expect(withdraw(85)).toEqual({ '5': 1, '10': 1, '20': 1, '50': 1 })
      })

      it('returns one of every note and 50 twice when ask 135', () => {
        expect(withdraw(135)).toEqual({ '5': 1, '10': 1, '20': 1, '50': 2 })
      })
    })
  })

  describe('from small to big and from bi to small notes', () => {
    describe('all notes', () => {
      it('returns one of every note and 20 twice when ask 105', () => {
        expect(withdraw(105)).toEqual({ '5': 1, '10': 1, '20': 2, '50': 1 })
      })

      it('returns one of every note and 10 and 20 twice when ask 115', () => {
        expect(withdraw(115)).toEqual({ '5': 1, '10': 2, '20': 2, '50': 1 })
      })

      it('returns one of every note and 5, 10 and 20 twice when ask 120', () => {
        expect(withdraw(120)).toEqual({ '5': 2, '10': 2, '20': 2, '50': 1 })
      })

      it('returns twice every note when ask 170', () => {
        expect(withdraw(170)).toEqual({ '5': 2, '10': 2, '20': 2, '50': 2 })
      })

      it('returns 5: 2, 10: 2, 20: 1 and 50: 2 when ask 150', () => {
        expect(withdraw(150)).toEqual({ '5': 2, '10': 2, '20': 1, '50': 2 })
      })

      it('returns 5: 2, 10: 1, 20: 2 and 50: 3 when ask 210', () => {
        expect(withdraw(210)).toEqual({ '5': 2, '10': 1, '20': 2, '50': 3 })
      })
    })
  })
})
