import { Service } from 'typedi'
import { QuadraticEquationParameters } from './quadraticEquationParameters'
import { QuadraticEquationResults } from './quadraticEquationResults'
import { NotRealDeltaError } from './errors/notRealDeltaError'
import { WrongAParameter } from './errors/wrongAParameter'

@Service()
export class QuadraticEquationCalculator {

  public calculate (quadraticEquationParameters: QuadraticEquationParameters): QuadraticEquationResults {
    if (quadraticEquationParameters.a === 0) {
      throw new WrongAParameter()
    }

    const delta: number = this.calculateDelta(quadraticEquationParameters)
    if (delta < 0) {
      throw new NotRealDeltaError()
    }

    return {
      x1: this.calculateX(quadraticEquationParameters, delta, +1),
      x2: delta !== 0 ? this.calculateX(quadraticEquationParameters, delta, -1) : undefined,
    }
  }

  public calculateDelta (quadraticEquationParameters: QuadraticEquationParameters): number {
    return Math.pow(quadraticEquationParameters.b, 2) - 4 * quadraticEquationParameters.a * quadraticEquationParameters.c
  }

  private calculateX (quadraticEquationParameters: QuadraticEquationParameters, delta: number, sign: number): number {
    return ((-quadraticEquationParameters.b) + Math.sign(sign) * Math.sqrt(delta)) / 2 * quadraticEquationParameters.a
  }
}
