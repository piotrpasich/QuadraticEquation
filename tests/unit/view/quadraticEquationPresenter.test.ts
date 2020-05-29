import { QuadraticEquationPresenter } from '../../../src/view/quadraticEquationPresenter'
import { expect, forEach } from '../setup'

describe('QuadraticEquationPresenter', () => {
  const quadraticEquationPresenter: QuadraticEquationPresenter = new QuadraticEquationPresenter()

  describe('toString', () => {
    const testData: (string | number)[][] = [
      [1, 1, 1, 'x² + x + 1 = 0'],
      [1, 0, 1, 'x² + 1 = 0'],
      [-1, 0, 1, '-x² + 1 = 0'],
      [-1, 0, 0, '-x² = 0'],
      [0, 0, 0, '0 = 0'],
      [0, -1, -1, '0 - x - 1 = 0'],
      [0, -1, -1, '0 - x - 1 = 0'],
      [2, 2, 2, '2x² + 2x + 2 = 0'],
      [-2, -2, -2, '-2x² - 2x - 2 = 0'],
    ]
    forEach(testData).it('When it is called with a=%j, b=%j, c=%j it should return %s', (
      a: number,
      b: number,
      c: number,
      expectedResult: string) => {
      expect(quadraticEquationPresenter.toString({a,b,c})).to.equal(expectedResult)
    })
  })
})
