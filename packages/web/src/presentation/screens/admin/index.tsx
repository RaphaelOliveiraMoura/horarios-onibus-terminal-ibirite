import { useEffect, useState } from 'react'

import { BusSchedule as BusScheduleModel, BusTime } from 'domain/models'

import EditableBusSchedule from 'presentation/components/EditableBusSchedule'
import AutoCompĺete, { Option } from 'presentation/components/AutoCompĺete'
import Loader from 'presentation/components/Loader'

import {
  getBusScheduleService,
  getBusLinesService
} from 'main/services/client-side'

import * as S from './styles'

enum PageStatus {
  LOADING = '__loading__',
  SUCCESS = '__success__',
  ERROR = '__error__'
}

export const BusScheduleDetailsAdminPage: React.FC = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>(PageStatus.LOADING)
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
        setPageStatus(PageStatus.SUCCESS)
      } catch (error) {
        setPageStatus(PageStatus.ERROR)
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

      {pageStatus === PageStatus.LOADING && <Loader />}

      {pageStatus === PageStatus.SUCCESS && currentBusSchedule && (
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
