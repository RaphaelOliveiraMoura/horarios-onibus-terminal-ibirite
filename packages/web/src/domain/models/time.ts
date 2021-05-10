export enum TimeType {
  Default = '',
  PI = 'pi',
  RI = 'ri',
  AL = 'al'
}

export class Time {
  public hours: number
  public minutes: number
  public type: TimeType

  private inRange(value: number, min: number, max: number) {
    return value >= min && value <= max
  }

  constructor(
    hours: number,
    minutes: number,
    type: TimeType = TimeType.Default
  ) {
    this.hours = hours
    this.minutes = minutes
    this.type = type

    if (!this.inRange(this.hours, 0, 23)) {
      throw new Error(`invalid-hours: '${this.hours}' must be in range 0 - 23`)
    }

    if (!this.inRange(this.minutes, 0, 59)) {
      throw new Error(
        `invalid-minutes: '${this.minutes}' must be in range 0 - 59`
      )
    }
  }

  public isAfter(time: Time) {
    if (this.hours === time.hours) {
      return this.minutes > time.minutes
    }

    return this.hours > time.hours
  }

  public isEqual(time: Time) {
    return (
      this.hours === time.hours &&
      this.minutes === time.minutes &&
      this.type === time.type
    )
  }

  public toString() {
    const formattedHours = String(this.hours).padStart(2, '0')
    const formattedMinutes = String(this.minutes).padStart(2, '0')
    return `${formattedHours}:${formattedMinutes}`
  }
}
