import { BusModifiers, BusTime, Time } from 'domain/models'
import { fromJson, toJson } from './bus-schedule'

describe('BusScheduleEntity', () => {
  it('Should parse BusSchedule object to json parsable object', () => {
    expect(
      toJson({
        bus: { id: 'bus_id', name: 'bus_name' },
        schedule: {
          saturdays: [
            new BusTime(new Time(0, 0)),
            new BusTime(new Time(1, 0)),
            new BusTime(new Time(2, 0)),
            new BusTime(new Time(2, 0))
          ],
          sundays: [
            new BusTime(new Time(0, 0)),
            new BusTime(new Time(1, 0)),
            new BusTime(new Time(2, 0)),
            new BusTime(new Time(3, 0), [BusModifiers.PREV, BusModifiers.PI])
          ],
          workingDays: [
            new BusTime(new Time(0, 0)),
            new BusTime(new Time(1, 0)),
            new BusTime(new Time(2, 0))
          ]
        }
      })
    ).toMatchObject({
      bus: { id: 'bus_id', name: 'bus_name' },
      schedule: {
        saturdays: ['00:00', '01:00', '02:00', '02:00'],
        sundays: ['00:00', '01:00', '02:00', '03:00:prev,pi'],
        workingDays: ['00:00', '01:00', '02:00']
      }
    })
  })

  it('Should parse BusSchedule parsable object to rich object', () => {
    expect(
      fromJson({
        bus: { id: 'bus_id', name: 'bus_name' },
        schedule: {
          saturdays: ['00:00', '01:00', '02:00', '02:00'],
          sundays: ['00:00', '01:00', '02:00', '03:00:prev,pi'],
          workingDays: ['00:00', '01:00', '02:00']
        }
      })
    ).toMatchObject({
      bus: { id: 'bus_id', name: 'bus_name' },
      schedule: {
        saturdays: [
          new BusTime(new Time(0, 0)),
          new BusTime(new Time(1, 0)),
          new BusTime(new Time(2, 0)),
          new BusTime(new Time(2, 0))
        ],
        sundays: [
          new BusTime(new Time(0, 0)),
          new BusTime(new Time(1, 0)),
          new BusTime(new Time(2, 0)),
          new BusTime(new Time(3, 0), [BusModifiers.PREV, BusModifiers.PI])
        ],
        workingDays: [
          new BusTime(new Time(0, 0)),
          new BusTime(new Time(1, 0)),
          new BusTime(new Time(2, 0))
        ]
      }
    })
  })
})
