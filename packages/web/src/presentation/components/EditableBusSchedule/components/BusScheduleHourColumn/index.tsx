import { useRef } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'

import { Time } from 'domain/models'
import BusScheduleItem from 'presentation/components/EditableBusSchedule/components/BusScheduleItem'
import { useEditableBusSchedule } from 'presentation/components/EditableBusSchedule/provider'

import * as S from './styles'

type BusScheduleHourColumnProps = {
  hourKey: string
  scheduleTimes: Array<Time | null>
}

const BusScheduleHourColumn: React.FC<BusScheduleHourColumnProps> = ({
  hourKey,
  scheduleTimes
}) => {
  const { onAddTime } = useEditableBusSchedule()

  const busScheduleHourColumn = useRef<HTMLDivElement>(null)

  async function onAdd() {
    if (!busScheduleHourColumn.current) return

    await onAddTime(hourKey)

    const addedTime = Array.from(
      busScheduleHourColumn.current.querySelectorAll('input')
    ).pop()

    if (!addedTime) return

    addedTime.focus()
  }

  return (
    <S.BusScheduleHourColumn key={hourKey} ref={busScheduleHourColumn}>
      <S.BusScheduleHeader>{hourKey}</S.BusScheduleHeader>

      {scheduleTimes.map((time) => (
        <BusScheduleItem
          key={time && time.toString() + Math.random()}
          time={time}
        />
      ))}
      <IoIosAddCircleOutline
        id="remove-time-button"
        size={14}
        color="#555"
        onClick={onAdd}
      />
    </S.BusScheduleHourColumn>
  )
}

export default BusScheduleHourColumn
