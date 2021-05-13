import { ChangeEvent, useState } from 'react'
// import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { BusTime, Time } from 'domain/models'

import { useEditableBusSchedule } from 'presentation/components/EditableBusSchedule/provider'
import { useDialog } from 'presentation/components/Dialog/provider'

import * as S from './styles'

type BusScheduleItemProps = {
  busTime: BusTime | null
}

const BusScheduleItem: React.FC<BusScheduleItemProps> = ({ busTime }) => {
  const { onEditTime, onRemoveTime } = useEditableBusSchedule()
  const { openDialog } = useDialog()

  const [isFocused, setFocus] = useState(false)

  function onBlur(event: ChangeEvent<HTMLInputElement>) {
    try {
      const inputValue = event.target.value

      const [newHours, newMinutes] = inputValue.split(':').map(Number)

      onEditTime(busTime, new BusTime(new Time(newHours, newMinutes)))

      setFocus(false)
    } catch (error) {
      onRemoveTime(busTime)
      setFocus(true)
    }
  }

  function openModifiersModal() {
    openDialog((close) => (
      <div>
        Alterar modificadores
        <label>
          PI
          <input type="checkbox" name="PI" id="pi" />
        </label>
        <button onClick={close}>Cancelar</button>
        <button onClick={close}>Confirmar</button>
      </div>
    ))
  }

  return (
    <>
      <S.BusScheduleItem focused={isFocused}>
        <S.BusScheduleInput
          defaultValue={busTime ? busTime.time.toString() : ''}
          maxLength={5}
          onFocus={() => setFocus(true)}
          onBlur={onBlur}
        />
        {/* <AiOutlineDelete color="red" onClick={() => onRemoveTime(busTime)} /> */}
        <AiOutlineInfoCircle
          color="#333"
          onClick={() => openModifiersModal()}
        />
      </S.BusScheduleItem>
    </>
  )
}

export default BusScheduleItem
