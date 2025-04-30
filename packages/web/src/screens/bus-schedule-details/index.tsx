import { useState } from 'react'

import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import AutoCompĺete from 'components/AutoCompĺete'
import BusSchedule from 'components/BusSchedule'
import Loader from 'components/Loader'
import LabelsLegend from 'components/LabelsLegend'

import { getBusLines } from 'use-cases/get-bus-lines'
import { getBusSchedule } from 'use-cases/get-bus-schedule'

import { BusScheduleOperations, RawBusSchedule } from 'models'

import * as S from './styles'
import { Toolbar } from 'components/Toolbar'
import { Footer } from 'components/Footer'

type BusScheduleDetailsPageProps = {
  busLines: { id: string; name: string }[]
  busScheduleRaw: RawBusSchedule
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const busLines = await getBusLines()

  const busId = String(context.params?.id)
  const busSchedule = await getBusSchedule({ busId })

  return {
    props: {
      busLines,
      busScheduleRaw: BusScheduleOperations.toJson(busSchedule)
    }
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

  const busSchedule = BusScheduleOperations.fromJson(busScheduleRaw)

  const [loading, setLoading] = useState(false)

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    setLoading(true)

    router.push(`/linhas/${inputValue.value}`).finally(() => setLoading(false))
  }

  if (typeof id !== 'string') {
    router.push(`/`)
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>Hórarios ônibus {busSchedule.bus.name} ATUALIZADO</title>
      </Head>
      <S.Wrapper>
        <Toolbar setLoading={setLoading}>
          <div className="input">
            <AutoCompĺete
              id="bus-line"
              options={busOptions}
              onChange={onSelectBusLine}
              placeholder="Selecione outra linha de ônibus"
              label="horarios-onibus"
            />
          </div>
        </Toolbar>

        <section>
          {loading && <Loader />}

          {/* {[
            '300c',
            '301c',
            '302h',
            '303m',
            '304m',
            '306r',
            '3356',
            '3370',
            '3390',
            '3450',
            '3455',
            '3460',
            '3465',
            '3480',
            '3500',
            '3505',
            '3520',
            '3525',
            '3540',
            '3560'
          ].includes(id.toLowerCase()) && (
            <img
              src="/img/alerta-natal.jpeg"
              alt="Aviso sobre mudanças de horários para natal"
              style={{ width: 300, marginTop: 16 }}
            />
          )} */}

          {['1019', '1020', '1021', '1022'].includes(id.toLowerCase()) && (
            <img
              src="/img/01-05-2025.png"
              alt="Aviso sobre mudanças de horários"
              style={{ width: 300, marginTop: 16 }}
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

          {/* {['3450', '3460', '3455', '3465'].includes(id.toLowerCase()) && (
            <>
              <h2
                style={{
                  maxWidth: 450,
                  marginTop: 12,
                  fontSize: 20,
                  fontWeight: 'normal',
                  textAlign: 'center',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  padding: 12,
                  background: '#E83A14',
                  color: '#fff'
                }}
              >
                A partir do dia <strong>27/03/22</strong> as linhas{' '}
                <strong>3450</strong> e <strong>3460</strong> serão substituidas
                aos domingos pelas linhas <strong>3455</strong> e{' '}
                <strong>3465</strong>
              </h2>
            </>
          )} */}

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
        </section>

        <Footer />
      </S.Wrapper>
    </>
  )
}
