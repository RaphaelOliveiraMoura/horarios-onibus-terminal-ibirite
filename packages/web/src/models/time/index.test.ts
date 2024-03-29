import { InvalidHoursError, InvalidMinutesError } from 'errors'
import { Time } from 'models'

describe('TimeModel', () => {
  it('should create valid times', () => {
    const testCases: [Time, string][] = [
      [new Time(0, 0), '00:00'],
      [new Time(1, 1), '01:01'],
      [new Time(12, 59), '12:59'],
      [new Time(23, 0), '23:00']
    ]

    testCases.forEach(([time, expectedString]) =>
      expect(time.toString()).toEqual(expectedString)
    )
  })

  it('should create invalid times', () => {
    const testCases: [() => Time, Error][] = [
      [() => new Time(-1, 0), new InvalidHoursError(-1)],
      [() => new Time(24, 0), new InvalidHoursError(24)],
      [() => new Time(1000, 0), new InvalidHoursError(1000)],
      [() => new Time(0, -1), new InvalidMinutesError(-1)],
      [() => new Time(0, 60), new InvalidMinutesError(60)],
      [() => new Time(0, 1000), new InvalidMinutesError(1000)]
    ]

    testCases.forEach(([expected, error]) => {
      expect(expected).toThrowError(error)
    })
  })

  it('should compare two dates', () => {
    const testCases: [Time, Time, boolean][] = [
      [new Time(0, 0), new Time(0, 0), true],
      [new Time(0, 0), new Time(0, 1), false],
      [new Time(0, 1), new Time(0, 0), false],
      [new Time(23, 35), new Time(23, 35), true],
      [new Time(23, 34), new Time(23, 35), false]
    ]

    testCases.forEach(([time1, time2, expectedResult]) =>
      expect(time1.isEqual(time2)).toBe(expectedResult)
    )
  })

  it('should check two dates positions (after|before)', () => {
    const testCases: [Time, Time, boolean][] = [
      [new Time(0, 0), new Time(0, 0), false],
      [new Time(0, 0), new Time(0, 1), false],
      [new Time(0, 1), new Time(0, 0), true],
      [new Time(23, 0), new Time(22, 59), true],
      [new Time(22, 0), new Time(23, 0), false]
    ]

    testCases.forEach(([time1, time2, expectedResult]) =>
      expect(time1.isAfter(time2)).toBe(expectedResult)
    )
  })
})
