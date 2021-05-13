// import AutoCompĺete from 'presentation/components/AutoCompĺete'
import EditableBusSchedule from 'presentation/components/EditableBusSchedule'
import AutoCompĺete from 'presentation/components/AutoCompĺete'
import { BusSchedule as BusScheduleModel, BusTime } from 'domain/models'

import {
  getBusScheduleService,
  getBusLinesService
} from 'main/services/client-side'

import * as S from 'presentation/screens/bus-schedule-details/styles'
import { useEffect, useState } from 'react'

type Option = { value: string; label: string }

type PageStatus = 'loading' | 'success' | 'error'

const BusScheduleDetailsAdminPage: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>('loading')
  const [busOptions, setBusOptions] = useState<Option[]>([])

  const [
    currentBusSchedule,
    setCurrentBusSchedule
  ] = useState<BusScheduleModel | null>(null)

  useEffect(() => {
    async function fetch() {
      try {
        const buses = await getBusLinesService.execute()
        const options = buses.map(({ id, name }) => ({
          value: id,
          label: name
        }))

        setBusOptions(options)
        setPageStatus('success')
      } catch (error) {
        setPageStatus('error')
      }
    }

    fetch()
  }, [])

  async function onSelectBusOption(inputValue: Option | null) {
    if (!inputValue?.value) return

    const busSchedule = await getBusScheduleService.execute(inputValue.value)

    setCurrentBusSchedule(null)
    setCurrentBusSchedule({ ...busSchedule })
  }

  async function onSave() {
    // if (!currentBusSchedule) return
    // console.log('onSave')
    // try {
    //   await updateBusScheduleService(
    //     currentBusSchedule.bus.id,
    //     currentBusSchedule.schedule
    //   )
    //   console.log('onSaveSuccess')
    // } catch (error) {
    //   console.log('onSaveError')
    //   console.log(error)
    // }
  }

  function onUpdateBusSchedule(key: 'workingDays' | 'saturdays' | 'sundays') {
    return (schedule: BusTime[]) => {
      if (!currentBusSchedule) return
      const draft = { ...currentBusSchedule }
      draft.schedule[key] = schedule
      setCurrentBusSchedule(draft)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Quadro de horários Terminal de Ibirité</S.Title>
        <AutoCompĺete
          id="bus-line"
          options={busOptions}
          onChange={onSelectBusOption}
          placeholder="Selecione a linha de ônibus"
          label="horarios-onibus"
        />
      </S.Header>

      {pageStatus === 'success' && currentBusSchedule && (
        <S.BusScheduleContainer>
          <S.UpdateButton onClick={onSave}>Salvar</S.UpdateButton>

          <EditableBusSchedule
            title="Dias úteis"
            schedule={currentBusSchedule.schedule.workingDays}
            onUpdateBusSchedule={onUpdateBusSchedule('workingDays')}
          />
          <EditableBusSchedule
            title="Sábados"
            schedule={currentBusSchedule.schedule.saturdays}
            onUpdateBusSchedule={onUpdateBusSchedule('saturdays')}
          />
          <EditableBusSchedule
            title="Domingos e feriados"
            schedule={currentBusSchedule.schedule.sundays}
            onUpdateBusSchedule={onUpdateBusSchedule('sundays')}
          />
        </S.BusScheduleContainer>
      )}
    </S.Wrapper>
  )
}

export default BusScheduleDetailsAdminPage
