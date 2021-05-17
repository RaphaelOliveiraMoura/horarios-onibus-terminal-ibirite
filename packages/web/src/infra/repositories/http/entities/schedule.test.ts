import { fromJson } from './schedule'

describe('ScheduleEntity', () => {
  it('Should throw error if try parse a raw object with invalid modifiers', () => {
    expect(() =>
      fromJson({
        saturdays: [],
        sundays: ['00:00:invalid-modifier'],
        workingDays: []
      })
    ).toThrowError(`Invalid DB Modifier: "invalid-modifier"`)
  })
})
