import { CustomError } from 'utils/custom-error'

export class InvalidBusModifiersError extends CustomError {
  constructor(modifier: string) {
    super(InvalidBusModifiersError, `(${modifier}) is invalid`)
  }
}
