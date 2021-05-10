import { useState } from 'react'

import AutoCompĺete from 'presentation/components/AutoCompĺete'
import BusSchedule from 'presentation/components/BusSchedule'
import { BusSchedule as BusScheduleModel } from 'domain/models'

import * as S from './styles'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Loader from 'presentation/components/Loader'

type BusScheduleDetailsPageProps = {
  busOptions: { label: string; value: string }[]
  busSchedule: BusScheduleModel
}

const BusScheduleDetailsPage: React.FC<BusScheduleDetailsPageProps> = ({
  busOptions,
  busSchedule
}) => {
  const router = useRouter()

  const { id } = router.query

  const [loading, setLoading] = useState(false)

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    setLoading(true)
    router.push(`/linhas/${inputValue.value}`).finally(() => setLoading(false))
  }

  if (typeof id !== 'string') return <div>error</div>

  return (
    <>
      <Head>
        <title>Hórarios ônibus {busSchedule.bus.name} ATUALIZADO</title>
      </Head>
      <S.Wrapper>
        <S.Header>
          <S.Title>
            Consulte os horários de ônibus do terminal de ibirité atualizados
          </S.Title>
          <AutoCompĺete
            options={busOptions}
            onChange={onSelectBusLine}
            placeholder="Selecione a linha de ônibus"
            label="horarios-onibus"
          />
        </S.Header>

        {loading && <Loader />}

        {!loading && (
          <>
            <S.BusLineTitle>
              Horários da linha: <strong>{busSchedule.bus.name}</strong>
            </S.BusLineTitle>
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
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default BusScheduleDetailsPage
