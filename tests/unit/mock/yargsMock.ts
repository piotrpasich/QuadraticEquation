import { sinon } from '../setup'
import { SinonStub } from 'sinon'
import { QuadraticEquationParameters } from '../../../src/math/quadraticEquationParameters'

export class YargsMock {

  public argv: QuadraticEquationParameters

  constructor (argv: QuadraticEquationParameters) {
    this.argv = argv
  }

  public option (): YargsMock {
    return this
  }

  public usage (): YargsMock {
    return this
  }

  public demandOption (): YargsMock {
    return this
  }

  public help (): YargsMock {
    return this
  }

  public alias (): YargsMock {
    return this
  }
}
