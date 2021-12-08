import { InvalidBusModifiersError } from 'errors'
import { BusModifiers, Time } from 'models'

export class BusTime {
  public time: Time
  public modifiers: BusModifiers[]

  constructor(time: Time, modifiers: BusModifiers[] = []) {
    this.time = time
    this.modifiers = Array.from(new Set(modifiers))

    if (
      this.modifiers.includes(BusModifiers.PI) &&
      this.modifiers.includes(BusModifiers.RI)
    ) {
      throw new InvalidBusModifiersError(this.modifiers)
    }
  }

  public isEqual(busTime: BusTime) {
    const modifiers1 = this.modifiers.sort((a, b) => (a > b ? 1 : -1)).join(',')
    const modifiers2 = busTime.modifiers
      .sort((a, b) => (a > b ? 1 : -1))
      .join(',')

    return this.time.isEqual(busTime.time) && modifiers1 === modifiers2
  }
}
