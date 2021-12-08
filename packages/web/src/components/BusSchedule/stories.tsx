import { Story, Meta } from '@storybook/react/types-6-0'
import { BusTime, Time } from 'models'

import BusSchedule from '.'

export default {
  title: 'BusSchedule',
  component: BusSchedule,
  args: {
    title: 'BusSchedule Title'
  }
} as Meta

const schedule = [
  new BusTime(new Time(8, 0)),
  new BusTime(new Time(8, 10)),
  new BusTime(new Time(8, 30)),
  new BusTime(new Time(9, 0)),
  new BusTime(new Time(10, 0)),
  new BusTime(new Time(10, 10)),
  new BusTime(new Time(10, 45)),
  new BusTime(new Time(11, 0)),
  new BusTime(new Time(12, 0)),
  new BusTime(new Time(13, 0)),
  new BusTime(new Time(14, 0)),
  new BusTime(new Time(15, 0)),
  new BusTime(new Time(16, 0)),
  new BusTime(new Time(17, 0)),
  new BusTime(new Time(18, 0)),
  new BusTime(new Time(19, 0)),
  new BusTime(new Time(20, 0)),
  new BusTime(new Time(21, 0)),
  new BusTime(new Time(22, 0)),
  new BusTime(new Time(23, 0))
]

export const Default: Story = (args) => (
  <BusSchedule title={args.title} schedule={schedule} />
)
