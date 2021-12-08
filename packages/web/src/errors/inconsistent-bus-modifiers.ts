import { BusModifiers } from 'models'
import { CustomError } from 'utils/custom-error'

export class InconsistentBusModifiersError extends CustomError {
  constructor(modifiers: BusModifiers[]) {
    super(InconsistentBusModifiersError, `(${modifiers}) are invalid modifiers`)
  }
}
