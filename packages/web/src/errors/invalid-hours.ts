import { CustomError } from 'utils/custom-error'

export class InvalidHoursError extends CustomError {
  constructor(hours: number) {
    super(InvalidHoursError, `(${hours}) must be in range 0 - 23`)
  }
}
