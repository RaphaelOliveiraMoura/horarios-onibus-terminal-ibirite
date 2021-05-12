import { useRef } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'

import { BusTime } from 'domain/models'
import BusScheduleItem from 'presentation/components/EditableBusSchedule/components/BusScheduleItem'
import { useEditableBusSchedule } from 'presentation/components/EditableBusSchedule/provider'

import * as S from './styles'

type BusScheduleHourColumnProps = {
  hourKey: string
  scheduleTimes: Array<BusTime | null>
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

      {scheduleTimes.map((busTime) => (
        <BusScheduleItem
          key={busTime && busTime.time.toString() + Math.random()}
          time={busTime}
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
