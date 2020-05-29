import { QuadraticEquationParameters } from '../math/quadraticEquationParameters'

export class QuadraticEquationPresenter {
  public toString (quadraticEquationParameters: QuadraticEquationParameters): string {
    return (`${this.getMinusSign(quadraticEquationParameters.a)}${this.getStringForValue(quadraticEquationParameters.a, 'x²').substr(3)}` +
      `${this.getStringForValue(quadraticEquationParameters.b, 'x')}` +
      `${this.getStringForValue(quadraticEquationParameters.c, '')}` +
      ` = 0`)
  }

  private getStringForValue (value: number, suffix: string): string {
    if (value === 0) {
      return ''
    }

    return ` ${this.getSign(value)} ${this.getValueDifferentThan1(value, suffix)}${suffix}`
  }

  private getValueDifferentThan1 (value: number, suffix: string): string {
    if (suffix === '') {
      return this.removeSign(value).toString()
    }

    return this.removeSign(value) === 1 ? '' : this.removeSign(value).toString()
  }

  private getSign (value: number): string {
    return Math.sign(value) == 1 ? '+' : '-'
  }

  private getMinusSign (value: number): string {
    return Math.sign(value) == 1 ? '' : (value === 0 ? '0' : '-')
  }

  private removeSign (value: number): number {
    return Math.sign(value) * value
  }
}
