import { CustomError } from 'utils/custom-error'

export class BusNotFoundError extends CustomError {
  constructor(busId: string) {
    super(BusNotFoundError, `bus with id (${busId}) not found`)
  }
}
