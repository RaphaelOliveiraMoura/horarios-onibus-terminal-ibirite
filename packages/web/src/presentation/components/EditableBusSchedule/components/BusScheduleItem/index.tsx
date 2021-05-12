import { ChangeEvent, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

import { BusTime, Time } from 'domain/models'
import { useEditableBusSchedule } from 'presentation/components/EditableBusSchedule/provider'

import * as S from './styles'

type BusScheduleItemProps = {
  time: BusTime | null
}

const BusScheduleItem: React.FC<BusScheduleItemProps> = ({ time }) => {
  const { onEditTime, onRemoveTime } = useEditableBusSchedule()

  const [isFocused, setFocus] = useState(false)

  function onBlur(event: ChangeEvent<HTMLInputElement>) {
    try {
      const inputValue = event.target.value

      const [newHours, newMinutes] = inputValue.split(':').map(Number)

      onEditTime(time, new BusTime(new Time(newHours, newMinutes)))

      setFocus(false)
    } catch (error) {
      onRemoveTime(time)
      setFocus(true)
    }
  }

  return (
    <S.BusScheduleItem focused={isFocused}>
      <S.BusScheduleInput
        defaultValue={time ? time.time.toString() : ''}
        maxLength={5}
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
      />
      <AiOutlineDelete color="red" onClick={() => onRemoveTime(time)} />
    </S.BusScheduleItem>
  )
}

export default BusScheduleItem
