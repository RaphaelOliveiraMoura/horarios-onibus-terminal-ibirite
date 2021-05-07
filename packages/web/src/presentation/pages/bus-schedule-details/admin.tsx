// import AutoCompĺete from 'presentation/components/AutoCompĺete'
import EditableBusSchedule from 'presentation/components/EditableBusSchedule'
import AutoCompĺete from 'presentation/components/AutoCompĺete'
import { BusSchedule as BusScheduleModel, Time } from 'domain/models'

import { updateBusScheduleService } from 'main/services'

import * as S from './styles'
import { useState } from 'react'
import { useGetBusOptions } from 'presentation/hooks'

type Option = { value: string; label: string }

const BusScheduleDetailsAdminPage: React.FC = () => {
  const [
    currentBusSchedule,
    setCurrentBusSchedule
  ] = useState<BusScheduleModel | null>(null)

  const { busOptions } = useGetBusOptions()

  async function onSelectBusOption(inputValue: Option | null) {
    if (!inputValue?.value) return

    const responseBusSchedule = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-bus-schedule/${inputValue.value}`
    )
    const busSchedule = await responseBusSchedule.json()

    setCurrentBusSchedule(null)
    setCurrentBusSchedule({ ...BusScheduleModel.fromJson(busSchedule) })
  }

  async function onSave() {
    if (!currentBusSchedule) return

    console.log('onSave')

    try {
      await updateBusScheduleService.execute(
        currentBusSchedule.bus.id,
        currentBusSchedule.schedule
      )
      console.log('onSaveSuccess')
    } catch (error) {
      console.log('onSaveError')
      console.log(error)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </S.Title>
        <AutoCompĺete
          options={busOptions}
          onChange={onSelectBusOption}
          placeholder="Selecione o ônibus para consulta de horários"
          label="horarios-onibus"
        />
      </S.Header>

      {currentBusSchedule && (
        <S.BusScheduleContainer>
          <button onClick={onSave}>Salvar</button>

          <EditableBusSchedule
            title="Dias úteis"
            schedule={currentBusSchedule.schedule.workingDays}
            onUpdateBusSchedule={(schedule: Time[]) => {
              const draft = { ...currentBusSchedule }
              draft.schedule.workingDays = schedule
              setCurrentBusSchedule(draft)
            }}
          />
          <EditableBusSchedule
            title="Sábados"
            schedule={currentBusSchedule.schedule.saturdays}
            onUpdateBusSchedule={(schedule: Time[]) => {
              const draft = { ...currentBusSchedule }
              draft.schedule.saturdays = schedule
              setCurrentBusSchedule(draft)
            }}
          />
          <EditableBusSchedule
            title="Domingos e feriados"
            schedule={currentBusSchedule.schedule.sundays}
            onUpdateBusSchedule={(schedule: Time[]) => {
              const draft = { ...currentBusSchedule }
              draft.schedule.sundays = schedule
              setCurrentBusSchedule(draft)
            }}
          />
        </S.BusScheduleContainer>
      )}
    </S.Wrapper>
  )
}

export default BusScheduleDetailsAdminPage
