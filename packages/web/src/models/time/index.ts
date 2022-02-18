import { InvalidHoursError, InvalidMinutesError } from 'errors'

export class Time {
  public hours: number
  public minutes: number

  private inRange(value: number, min: number, max: number) {
    return value >= min && value <= max
  }

  constructor(hours: number, minutes: number) {
    this.hours = hours
    this.minutes = minutes

    if (!this.inRange(this.hours, 0, 23)) {
      throw new InvalidHoursError(this.hours)
    }

    if (!this.inRange(this.minutes, 0, 59)) {
      throw new InvalidMinutesError(this.minutes)
    }
  }

  public isAfter(time: Time) {
    if (this.hours === time.hours) {
      return this.minutes > time.minutes
    }

    return this.hours > time.hours
  }

  public isEqual(time: Time) {
    return this.hours === time.hours && this.minutes === time.minutes
  }

  public toString() {
    const formattedHours = String(this.hours).padStart(2, '0')
    const formattedMinutes = String(this.minutes).padStart(2, '0')
    return `${formattedHours}:${formattedMinutes}`
  }
}
