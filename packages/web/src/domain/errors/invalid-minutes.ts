import { CustomError } from 'utils/custom-error'

export class InvalidMinutesError extends CustomError {
  constructor(minutes: number) {
    super(InvalidMinutesError, `(${minutes}) must be in range 0 - 59`)
  }
}
