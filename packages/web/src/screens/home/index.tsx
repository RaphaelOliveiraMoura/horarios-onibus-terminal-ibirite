import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AutoCompĺete, { Option } from 'components/AutoCompĺete'
import Loader from 'components/Loader'

import { getBusLines } from 'use-cases/get-bus-lines'

import * as S from './styles'
import { Text } from 'components/Text'
import { Footer } from 'components/Footer'

const external_bus_value = 'R$ 10,40'

const internal_bus_value = 'R$ 7,20'
const internal_integration_value = 'R$ 3,20'

const municipal_bus_value = 'R$ 00,00 (GRÁTIS)'
// const municipal_integration_value = 'R$ 2,35'

const HomePage: React.FC = () => {
  const router = useRouter()

  const [busOptions, setBusOptions] = useState<Option[]>([])
  const [inputFocused, setInputFocused] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const buses = await getBusLines()
        const options = buses.map(({ id, name }) => ({
          value: id,
          label: name
        }))

        setBusOptions(options)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [])

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    setLoading(true)
    router.push(`/linhas/${inputValue.value}`).finally(() => setLoading(false))
  }

  return (
    <S.Wrapper>
      <S.BackgroundContainer $inputFocused={inputFocused}>
        <div className="content">
          <Text variant="title">Horários de ônibus do Terminal de Ibirité</Text>

          <AutoCompĺete
            id="bus-line"
            options={busOptions}
            onChange={onSelectBusLine}
            placeholder="Selecione a sua linha de ônibus"
            label="horarios-onibus"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            variant="large"
          />

          {loading && <Loader />}
        </div>

        <img
          className="background"
          src="/img/background.jpeg"
          alt="Imagem do terminal de ibirité"
        />
        <img className="bus" src="/img/onibus.png" alt="Imagem de um onibus" />
      </S.BackgroundContainer>

      <section id="linhas-atualizadas">
        <Text variant="title">⌛ Horários sempre atualizados</Text>
        <Text>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </Text>
        <Text>
          Atualizamos o site frequentemente para mantermos você sempre
          atualizado sobre os novos horários de ônibus
        </Text>
      </section>

      <section id="tipos-de-linhas">
        <Text variant="title">🚌 Linhas de ônibus</Text>
        <Text variant="subtitle">Troncal</Text>
        <Text>
          São linhas gerenciadas pelo{' '}
          <a
            href="http://www.consultas.der.mg.gov.br/grgx/sgtm/consulta_linha.xhtml"
            target="_blank"
            rel="noreferrer"
          >
            DEER (Departamento de Edificações e Estradas de Rodagem de Minas
            Gerais)
          </a>{' '}
          e tem o trajeto do terminal para outros municípios
        </Text>
        <Text variant="subtitle">Alimentadora</Text>
        <Text>
          São linhas também gerenciadas pelo{' '}
          <a
            href="http://www.consultas.der.mg.gov.br/grgx/sgtm/consulta_linha.xhtml"
            target="_blank"
            rel="noreferrer"
          >
            DEER
          </a>
          , que fazem o trajeto dos bairros para o terminal de Ibirité
        </Text>
        <Text variant="subtitle">Municipal</Text>
        <Text>
          Essas linhas são gerenciadas pela{' '}
          <a
            href="https://www.ibirite.mg.gov.br/detalhe-da-materia/info/horarios-de-onibus/6504"
            target="_blank"
            rel="noreferrer"
          >
            Prefeitura de Ibirité
          </a>{' '}
          e também fazem o trajeto dos bairros para o terminal de Ibirité
        </Text>
      </section>

      <section id="valores-passagem">
        <Text variant="title">💰 Valor da passagem</Text>
        <Text>
          A tarifa dos ônibus das linhas <strong>troncais</strong>, tem o valor
          de <strong>{external_bus_value}</strong>.
        </Text>
        <Text>
          Enquanto a tarifa dos ônibus das linhas <strong>alimentadoras</strong>
          , tem o valor de <strong>{internal_bus_value}</strong>.
        </Text>
        <Text>
          Já a tarifa dos ônibus das linhas <strong>municipais</strong>, tem o
          valor de <strong>{municipal_bus_value}</strong>.
        </Text>
      </section>

      <section id="integracao">
        <Text variant="title">💳 Como funciona a integração?</Text>

        <Text>
          Quando você pegar algum ônibus das linhas municipais ou alimentadoras{' '}
          <Text variant="smooth" as="span">
            (linhas de bairro)
          </Text>{' '}
          com destino ao terminal e em seguida for pegar um ônibus troncal{' '}
          <Text variant="smooth" as="span">
            (linhas que vão para outros municípios)
          </Text>{' '}
          você não vai precisar pagar mais {external_bus_value} para isso.
        </Text>

        <Text variant="smooth">
          Exemplo: Peguei o 3356 pagando {internal_bus_value}, em seguida irei
          pegar o 301C, desse modo eu não vou precisar pagar mais{' '}
          {external_bus_value}, irei pagar apenas a{' '}
          <strong>integração no valor de {internal_integration_value}</strong>.
          Pois serão {external_bus_value} - {internal_bus_value},{' '}
          <strong>
            totalizando {internal_integration_value} da integração.
          </strong>
        </Text>

        {/* <Text>
          Caso você for pegar um ônibus municipal a integração será{' '}
          {municipal_integration_value}. Pois serão {external_bus_value} -{' '}
          {municipal_bus_value},{' '}
          <strong>totalizando {municipal_integration_value}.</strong>
        </Text> */}

        <ul>
          <Text as="span">Resumindo:</Text>
          {/* <li>
            <Text as="span">
              Integração de linhas municipais:{' '}
              <strong>{municipal_integration_value}</strong>
            </Text>
          </li> */}
          <li>
            <Text as="span">
              Integração de linhas alimentadoras:{' '}
              <strong>{internal_integration_value}</strong>
            </Text>
          </li>
        </ul>

        <Text variant="disclaimer">
          Porém a integração só é valida se você realizar o pagamento com o
          cartão Ótimo
        </Text>
      </section>

      <Footer />
    </S.Wrapper>
  )
}

export default HomePage
