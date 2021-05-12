import { Story, Meta } from '@storybook/react/types-6-0'
import { BusTime, Time } from 'domain/models'

import EditableBusSchedule from '.'

export default {
  title: 'EditableBusSchedule',
  component: EditableBusSchedule,
  args: {
    title: 'EditableBusSchedule Title'
  }
} as Meta

export const Default: Story = (args) => (
  <EditableBusSchedule
    title={args.title}
    onUpdateBusSchedule={() => null}
    schedule={[
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
    ]}
  />
)
