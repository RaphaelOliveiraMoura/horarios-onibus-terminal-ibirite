import { useEffect, useState } from 'react'

import { getBusLinesService, getBusScheduleService } from 'main/services'
import AutoCompĺete from 'presentation/components/AutoCompĺete'
import BusSchedule from 'presentation/components/BusSchedule'
import { BusSchedule as BusScheduleModel } from 'domain/models'

import * as S from './styles'

type BusScheduleDetailsPageProps = {
  busId: string
}

type PageState = 'loading' | 'error' | 'success'

const BusScheduleDetailsPage: React.FC<BusScheduleDetailsPageProps> = ({
  busId
}) => {
  const [pageState, setPageState] = useState<PageState>('loading')
  const [options, setOptions] = useState<{ value: string; label: string }[]>([])
  const [busSchedule, setBusSchedule] = useState<BusScheduleModel>()

  useEffect(() => {
    getBusLinesService.execute().then((buses) => {
      const busesOptions = buses.map(({ id, name }) => ({
        value: id,
        label: name
      }))

      setOptions(busesOptions)
    })

    getBusScheduleService
      .execute(busId)
      .then((busScheduleResult) => {
        setBusSchedule(busScheduleResult)
        setPageState('success')
      })
      .catch(() => {
        setPageState('error')
      })
  }, [busId])

  function loading() {
    return <div>Loading ...</div>
  }

  function error() {
    return <div>error =(</div>
  }

  function success() {
    if (!busSchedule) throw new Error('Invalid BusSchedule')

    return (
      <S.BusScheduleContainer>
        <BusSchedule
          title="Dias úteis"
          schedule={busSchedule.schedule.workingDays}
        />
        <BusSchedule
          title="Sábados"
          schedule={busSchedule.schedule.saturdays}
        />
        <BusSchedule
          title="Domingos e feriados"
          schedule={busSchedule.schedule.sundays}
        />
      </S.BusScheduleContainer>
    )
  }

  const pageBuilders = {
    loading,
    error,
    success
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </S.Title>
        <AutoCompĺete
          options={options}
          placeholder="Selecione o ônibus para consulta de horários"
          label="horarios-onibus"
        />
      </S.Header>

      {pageBuilders[pageState]()}
    </S.Wrapper>
  )
}

export default BusScheduleDetailsPage
