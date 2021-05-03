export class Time {
  constructor(private hours: number, private minutes: number) {
    if (hours < 0 || hours > 24) {
      throw new Error(`invalid-hours: '${hours}' must be in range 0 - 24`)
    }

    if (minutes < 0 || minutes > 60) {
      throw new Error(`invalid-minutes: '${minutes}' must be in range 0 - 60`)
    }
  }

  toString() {
    return `${this.hours.toFixed(2)}:${this.minutes.toFixed(2)}`
  }
}
