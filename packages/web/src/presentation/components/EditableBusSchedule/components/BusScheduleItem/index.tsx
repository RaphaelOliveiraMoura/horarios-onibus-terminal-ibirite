import { ChangeEvent, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { BusModifiers, BusTime, Time } from 'domain/models'

import { useEditableBusSchedule } from 'presentation/components/EditableBusSchedule/provider'
import { useDialog } from 'presentation/components/Dialog/provider'

import * as S from './styles'
import { modifiersMap } from 'presentation/components/ModifiersTooltip'

type BusScheduleItemProps = {
  busTime: BusTime | null
}

const BusScheduleItem: React.FC<BusScheduleItemProps> = ({ busTime }) => {
  const { onEditTime, onRemoveTime, changeModifier } = useEditableBusSchedule()
  const { openDialog } = useDialog()

  function onBlur(event: ChangeEvent<HTMLInputElement>) {
    try {
      const inputValue = event.target.value

      const [newHours, newMinutes] = inputValue.split(':').map(Number)

      onEditTime(busTime, new BusTime(new Time(newHours, newMinutes)))
    } catch (error) {
      onRemoveTime(busTime)
    }
  }

  function openModifiersModal() {
    if (!busTime) return

    openDialog(function Builder({ close }: { close: () => void }) {
      const [modifiers, setModifiers] = useState(busTime.modifiers)

      function onChangeModifier(modifier: BusModifiers) {
        return function (e: ChangeEvent<HTMLInputElement>) {
          const draftModifiers = [...modifiers]

          const modifierIndex = draftModifiers.indexOf(modifier)

          if (modifierIndex >= 0) draftModifiers.splice(modifierIndex, 1)

          if (e.target.checked) {
            draftModifiers.push(modifier)

            if (
              draftModifiers.includes(BusModifiers.PI) &&
              draftModifiers.includes(BusModifiers.RI)
            ) {
              const indexToRemove =
                modifier === BusModifiers.PI
                  ? modifiers.indexOf(BusModifiers.RI)
                  : modifiers.indexOf(BusModifiers.PI)

              draftModifiers.splice(indexToRemove, 1)
            }
          }

          setModifiers(draftModifiers)
        }
      }

      return (
        <S.ModifiersModalWrapper>
          <S.ModifiersModalTitle>Alterar modificadores</S.ModifiersModalTitle>
          <S.ModifiersModalContent>
            <label>
              <input
                type="checkbox"
                name="PI"
                id="pi"
                checked={modifiers.includes(BusModifiers.PI)}
                onChange={onChangeModifier(BusModifiers.PI)}
              />
              <strong>PI</strong>&nbsp;(Sai do bairro)
            </label>
            <label>
              <input
                type="checkbox"
                name="RI"
                id="ri"
                checked={modifiers.includes(BusModifiers.RI)}
                onChange={onChangeModifier(BusModifiers.RI)}
              />
              <strong>RI</strong>&nbsp;(Chega no bairro)
            </label>
          </S.ModifiersModalContent>
          <S.ModifiersModalButton
            onClick={() => {
              changeModifier(busTime, modifiers)
              close()
            }}
          >
            Salvar
          </S.ModifiersModalButton>
        </S.ModifiersModalWrapper>
      )
    })
  }

  return (
    <>
      <S.BusScheduleItem>
        {busTime && busTime.modifiers.length > 0 && (
          <S.WidgetsContainer>
            {busTime.modifiers.map((modifier) =>
              modifiersMap[modifier](`${busTime.time.toString()}${modifier}`)
            )}
          </S.WidgetsContainer>
        )}

        <S.BusScheduleInput
          defaultValue={busTime ? busTime.time.toString() : ''}
          maxLength={5}
          onBlur={onBlur}
        />
        <AiOutlineInfoCircle
          color="#333"
          onMouseDown={() => openModifiersModal()}
        />
      </S.BusScheduleItem>
    </>
  )
}

export default BusScheduleItem
