type Prototypable = {
  prototype: Error
}

export class CustomError extends Error {
  constructor(ErrorType: Prototypable, message: string) {
    super(message)
    this.name = message
    Object.setPrototypeOf(this, ErrorType.prototype)
  }
}
