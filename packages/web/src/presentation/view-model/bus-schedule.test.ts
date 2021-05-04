import { Time } from 'domain/models'
import { BusScheduleViewModel } from './bus-schedule'

describe('BusScheduleViewModel', () => {
  it('should parse array of time to scheduleMap', () => {
    expect(
      BusScheduleViewModel.parse([
        new Time(0, 0),
        new Time(0, 0),
        new Time(0, 0),
        new Time(1, 0),
        new Time(1, 10),
        new Time(1, 20),
        new Time(2, 0),
        new Time(2, 10),
        new Time(2, 45)
      ])
    ).toMatchObject({
      0: [new Time(0, 0), new Time(0, 0), new Time(0, 0)],
      1: [new Time(1, 0), new Time(1, 10), new Time(1, 20)],
      2: [new Time(2, 0), new Time(2, 10), new Time(2, 45)]
    })
  })

  it('should sanitize scheduleMap', () => {
    expect(
      BusScheduleViewModel.sanitize({
        0: [new Time(0, 0), new Time(0, 0), new Time(0, 0)],
        1: [new Time(1, 10), new Time(1, 0), new Time(1, 20), new Time(1, 20)],
        2: [new Time(2, 45), new Time(2, 0), new Time(2, 10)]
      })
    ).toMatchObject({
      0: [new Time(0, 0)],
      1: [new Time(1, 0), new Time(1, 10), new Time(1, 20)],
      2: [new Time(2, 0), new Time(2, 10), new Time(2, 45)]
    })
  })

  it('should parse a scheduleMap to array of time', () => {
    expect(
      BusScheduleViewModel.unparse({
        0: [new Time(0, 0), new Time(0, 0), new Time(0, 0)],
        1: [new Time(1, 10), new Time(1, 0), new Time(1, 20), new Time(1, 20)],
        2: [new Time(2, 45), new Time(2, 0), new Time(2, 10)]
      })
    ).toEqual([
      new Time(0, 0),
      new Time(0, 0),
      new Time(0, 0),
      new Time(1, 10),
      new Time(1, 0),
      new Time(1, 20),
      new Time(1, 20),
      new Time(2, 45),
      new Time(2, 0),
      new Time(2, 10)
    ])
  })
})
