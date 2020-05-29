import * as yargs from 'yargs'
import { QuadraticEquationParameters } from '../math/quadraticEquationParameters'
import { QuadraticEquationCalculator } from '../math/quadraticEquationCalculator'
import { QuadraticEquationResults } from '../math/quadraticEquationResults'
import * as chalk from 'chalk'
import { QuadraticEquationPresenter } from '../view/quadraticEquationPresenter'

export class QuadraticEquation {
  private readonly quadraticEquationParameters: QuadraticEquationParameters

  constructor (
    private readonly quadraticEquationCalculator: QuadraticEquationCalculator,
    private readonly quadraticEquationPresenter: QuadraticEquationPresenter,
    private readonly yargs: yargs.Argv,
  ) {
    this.quadraticEquationParameters = this.yargs
      .option('a', {
        description: 'Variable a in quadratic equasion ax²+bx+c=0',
        type: 'number'
      })
      .option('b', {
        description: 'Variable b in quadratic equasion ax²+bx+c=0',
        type: 'number',
        default: 0,
      })
      .option('c', {
        description: 'Variable b in quadratic equasion ax²+bx+c=0',
        type: 'number',
        default: 0,
      })
      .usage('Usage: npm run  eq -- -a [num] -b [num] -c [num]')
      .demandOption(['a', 'b', 'c'])
      .help()
      .alias('help', 'h')
      .argv

    try {
      const results: QuadraticEquationResults = this.quadraticEquationCalculator.calculate(this.quadraticEquationParameters)

      console.log(
        chalk.green(`Result of the equasion ${this.quadraticEquationPresenter.toString(this.quadraticEquationParameters)} is: `),
        `x1: ${results.x1}`, results.x2 ? `x2: ${results.x2}` : '')
    } catch (error) {
      console.error(chalk.red(error.message))
    }

  }
}
