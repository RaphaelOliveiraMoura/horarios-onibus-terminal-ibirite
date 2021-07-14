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
import LabelsLegend from 'presentation/components/LabelsLegend'

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

        {['3490', '304m'].includes(id.toLowerCase()) && (
          <embed
            style={{ marginTop: 16, maxWidth: 500 }}
            src="/pdf/304M.pdf"
            width="100%"
            height="375"
            type="application/pdf"
          />
        )}

        {['305r'].includes(id.toLowerCase()) && (
          <embed
            style={{ marginTop: 16, maxWidth: 500 }}
            src="/pdf/305R.pdf"
            width="100%"
            height="375"
            type="application/pdf"
          />
        )}

        {['302h'].includes(id.toLowerCase()) && (
          <embed
            style={{ marginTop: 16, maxWidth: 500 }}
            src="/pdf/302H.pdf"
            width="100%"
            height="375"
            type="application/pdf"
          />
        )}

        {['1024', '1024p', 'c002'].includes(id.toLowerCase()) && (
          <>
            <img
              src="/img/logo_ibiritrans.png"
              alt="Logo da Ibiritrans"
              style={{ width: 200, marginTop: 16 }}
            />
            <h2
              style={{
                maxWidth: 450,
                marginTop: 12,
                fontSize: 12,
                fontWeight: 'normal',
                textAlign: 'center'
              }}
            >
              Conforme processo movido contra a Prefeitura pelo Consórcio Via
              Amazonas / Saritur, a partir de segunda feira (07 de junho), as
              linhas C002 e 1024 (sentido Los Angeles) deixarão de atender á
              Avenida Expedito Faria Tavares, passando a operar pela Rua José
              Tavares Filho nos dois sentidos
            </h2>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=13A1diuK1YI1_O9WljpQ9mv6YyE4hDsc6"
              width="300"
              height="480"
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                marginTop: '12px',
                marginBottom: '12px'
              }}
            ></iframe>
          </>
        )}

        {loading && <Loader />}

        {!loading && (
          <>
            <S.BusLineTitle>
              Horários da linha: <strong>{busSchedule.bus.name}</strong>
            </S.BusLineTitle>

            <LabelsLegend labels={busSchedule.labels} />

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

            {busSchedule.map && (
              <iframe
                src={busSchedule.map}
                width="640"
                height="480"
                style={{ maxWidth: '100%', marginTop: '12px' }}
              ></iframe>
            )}
          </>
        )}
      </S.Wrapper>
    </>
  )
}
