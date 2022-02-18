import {
  InvalidHoursError,
  InvalidMinutesError,
  InconsistentBusModifiersError
} from 'errors'
import { BusModifiers, BusTime, Time } from 'models'

describe('BusTime', () => {
  it('should create valid busTimes', () => {
    const testCases: [() => BusTime][] = [
      [() => new BusTime(new Time(0, 0))],
      [() => new BusTime(new Time(15, 25))],
      [() => new BusTime(new Time(0, 0), [])],
      [() => new BusTime(new Time(0, 0), [BusModifiers.PI])],
      [
        () =>
          new BusTime(new Time(0, 0), [
            BusModifiers.PI,
            BusModifiers.AL,
            BusModifiers.PREV
          ])
      ]
    ]

    testCases.forEach(([busTime]) => expect(busTime).not.toThrowError())
  })

  it('should create invalid busTimes', () => {
    const testCases: [() => BusTime, Error][] = [
      [() => new BusTime(new Time(-1, 0)), new InvalidHoursError(-1)],
      [() => new BusTime(new Time(15, 80)), new InvalidMinutesError(80)],
      [
        () => new BusTime(new Time(0, 0), [BusModifiers.PI, BusModifiers.RI]),
        new InconsistentBusModifiersError([BusModifiers.PI, BusModifiers.RI])
      ]
    ]

    testCases.forEach(([busTime]) => expect(busTime).toThrowError())
  })
})
