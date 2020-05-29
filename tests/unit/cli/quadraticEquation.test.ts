import { QuadraticEquation } from '../../../src/cli/quadraticEquation'
import { expect, sinon } from '../setup'
import { SinonSpy, SinonStub } from 'sinon'

import { QuadraticEquationCalculator } from '../../../src/math/quadraticEquationCalculator'
import { QuadraticEquationPresenter } from '../../../src/view/quadraticEquationPresenter'
import * as yargs from 'yargs'
import { YargsMock } from '../mock/yargsMock'
import { QuadraticEquationParameters } from '../../../src/math/quadraticEquationParameters'
import * as chalk from 'chalk'

describe('QuadraticEquation CLI', () => {
  let quadraticEquation: QuadraticEquation

  let quadraticEquationParameters: QuadraticEquationParameters = { a: 1, b: 1, c: 1 }

  const calculateStub: SinonStub = sinon.stub()
  const quadraticEquationCalculatorMock: Partial<QuadraticEquationCalculator> = {
    calculate: calculateStub,
  }
  const toStringStub: SinonStub = sinon.stub()
  const quadraticEquationPresenterMock: Partial<QuadraticEquationPresenter> = {
    toString: toStringStub,
  }

  let consoleLogSpy: SinonSpy
  let consoleErrorSpy: SinonSpy
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log')
    consoleErrorSpy = sinon.spy(console, 'error')
  })

  afterEach(() => {
    consoleLogSpy.restore()
    consoleErrorSpy.restore()
    toStringStub.reset()
    calculateStub.reset()
  })

  it('should show a success message if the calculation succeed', () => {
    const yarn: YargsMock = new YargsMock(quadraticEquationParameters)
    calculateStub.returns({ x1: 'x1', x2: 'x2' })
    toStringStub.returns('toStringStub')
    quadraticEquation = new QuadraticEquation(
      <QuadraticEquationCalculator> quadraticEquationCalculatorMock,
      <QuadraticEquationPresenter> quadraticEquationPresenterMock,
      <yargs.Argv> <any> yarn,
    )
    expect(console.log).to.be.called
    expect(calculateStub).to.be.calledWith(quadraticEquationParameters)
    expect(toStringStub).to.be.calledWith(quadraticEquationParameters)
  })

  it('should show a success message with only x1 if the calculation succeed with only one parameter', () => {
    const yarn: YargsMock = new YargsMock(quadraticEquationParameters)
    calculateStub.returns({ x1: 'x1' })
    toStringStub.returns('toStringStub')
    quadraticEquation = new QuadraticEquation(
      <QuadraticEquationCalculator> quadraticEquationCalculatorMock,
      <QuadraticEquationPresenter> quadraticEquationPresenterMock,
      <yargs.Argv> <any> yarn,
    )
    expect(console.log).to.be.called
    expect(calculateStub).to.be.calledWith(quadraticEquationParameters)
    expect(toStringStub).to.be.calledWith(quadraticEquationParameters)
  })

  it('should show an error message if the calculation threw an error', () => {
    const yarn: YargsMock = new YargsMock(quadraticEquationParameters)
    calculateStub.throws(new Error('message'))
    quadraticEquation = new QuadraticEquation(
      <QuadraticEquationCalculator> quadraticEquationCalculatorMock,
      <QuadraticEquationPresenter> quadraticEquationPresenterMock,
      <yargs.Argv> <any> yarn,
    )
    expect(console.log).not.to.be.called
    expect(calculateStub).to.be.calledWith(quadraticEquationParameters)
    expect(toStringStub).not.to.be.called
    expect(console.error).to.be.called
  })
})
