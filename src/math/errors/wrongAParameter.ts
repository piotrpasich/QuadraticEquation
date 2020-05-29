export class WrongAParameter extends Error {
  constructor () {
    super()
    this.message = `Wrong A parameter. Should be different than 0`
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
