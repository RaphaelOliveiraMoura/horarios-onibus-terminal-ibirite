import { useState } from 'react'

import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Bus } from 'domain/models'

import AutoCompĺete from 'presentation/components/AutoCompĺete'
import BusSchedule from 'presentation/components/BusSchedule'
import Loader from 'presentation/components/Loader'

import * as BusScheduleEntity from 'infra/repositories/http/entities/bus-schedule'

import {
  getBusLinesService,
  getBusScheduleService
} from 'main/services/server-side'

import * as S from './styles'

type BusScheduleDetailsPageProps = {
  busLines: Bus[]
  busScheduleRaw: BusScheduleEntity.HttpBusScheduleResponse
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const busLines = await getBusLinesService.execute()

  const busSchedule = await getBusScheduleService.execute(
    String(context.params?.id)
  )

  return {
    props: { busLines, busScheduleRaw: BusScheduleEntity.toJson(busSchedule) }
  } as { props: BusScheduleDetailsPageProps }
}

export const BusScheduleDetailsPage: React.FC<BusScheduleDetailsPageProps> = ({
  busLines,
  busScheduleRaw
}) => {
  const router = useRouter()

  const { id } = router.query

  const busOptions = busLines.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  const busSchedule = BusScheduleEntity.fromJson(busScheduleRaw)

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
            id="bus-line"
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
