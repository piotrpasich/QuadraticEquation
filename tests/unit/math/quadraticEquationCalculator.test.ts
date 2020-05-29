import { QuadraticEquationCalculator } from '../../../src/math/quadraticEquationCalculator'
import { expect, forEach } from '../setup'
import { QuadraticEquationParameters } from '../../../src/math/quadraticEquationParameters'
import { WrongAParameter } from '../../../src/math/errors/wrongAParameter'
import { NotRealDeltaError } from '../../../src/math/errors/notRealDeltaError'

describe('QuadraticEquationCalculator', () => {
  const quadraticEquationCalculator: QuadraticEquationCalculator = new QuadraticEquationCalculator()

  describe('calculateDelta', () => {
    const testData: number[][] = [
      // a, b, c, expected result
      [1, 1, 1, -3],
      [1, 0, 0, 0],
      [0, 2, 0, 4],
      [2, 2, 2, -12],
      [0, 0, 0, 0],
      [4, -4, 1, 0],
      [-4, -4, -1, 0],
    ]
    forEach(testData).it('Equation %jx² + %jx + %j = 0 should have delta equal to %j', (
      a: number,
      b: number,
      c: number,
      expectedResult: number) => {

      expect(quadraticEquationCalculator.calculateDelta(<QuadraticEquationParameters> {
        a,
        b,
        c,
      })).to.equal(expectedResult)
    })
  })

  describe('calculate', () => {
    const testData = [
      // a, b, c, x1, x2
      [1, 1, -1, 0.6180339887498949, -1.618033988749895],
      [1, 0, 0, 0, undefined],
      [2, 2, -2, 2.4721359549995796, -6.47213595499958],
      [4, -4, 1, 8, undefined],
      [-4, -4, -1, -8, undefined],
      [1, 2, 1, -1, undefined],
      [1, 4, 3, -1, -3],
      [1, 0, -4, 2, -2],
      [2, 2, 0, 0, -4],
    ]
    forEach(testData).it('Equation %jx² + %jx + %j = 0 should have x1 euqal to %j and x2 equal to %j', (
      a: number,
      b: number,
      c: number,
      x1: number,
      x2: number) => {

      expect(quadraticEquationCalculator.calculate({
        a,
        b,
        c,
      })).to.deep.equal({ x1, x2 })
    })

    it('Should throw a WrongAParameter error when a parameter equals 0', () => {
      expect(() => {
        quadraticEquationCalculator.calculate({ a: 0, b: 0, c: 0 })
      }).to.throw(WrongAParameter)
    })
    it('Should throw a NotRealDeltaError error when the delta is less than 0', () => {
      expect(() => {
        quadraticEquationCalculator.calculate({ a: 1, b: 0, c: 1 })
      }).to.throw(NotRealDeltaError)
    })
  })
})
