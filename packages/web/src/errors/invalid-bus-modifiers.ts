import { BusModifiers } from 'models'
import { CustomError } from 'utils/custom-error'

export class InvalidBusModifiersError extends CustomError {
  constructor(modifiers: BusModifiers[]) {
    super(InvalidBusModifiersError, `(${modifiers}) are invalid modifiers`)
  }
}
