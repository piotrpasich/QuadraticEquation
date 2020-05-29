import { QuadraticEquationCalculator } from '../math/quadraticEquationCalculator'
import { QuadraticEquationPresenter } from '../view/quadraticEquationPresenter'
import * as yargs from 'yargs'
import { QuadraticEquation } from './quadraticEquation'

new QuadraticEquation(
  new QuadraticEquationCalculator(),
  new QuadraticEquationPresenter(),
  yargs
)
