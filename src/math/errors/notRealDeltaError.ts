export class NotRealDeltaError extends Error {
  constructor () {
    super()
    this.message = `Delta is not real`
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
