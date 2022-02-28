import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AutoCompĺete, { Option } from 'components/AutoCompĺete'
import Loader from 'components/Loader'

import { getBusLines } from 'use-cases/get-bus-lines'

import * as S from './styles'

const external_bus_value = 'R$ 7,65'

const internal_bus_value = 'R$ 5,30'
const internal_integration_value = 'R$ 2,35'

const municipal_bus_value = 'R$ 4,25'
const municipal_integration_value = 'R$ 3,40'

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
          <h1>Horários de ônibus do Terminal de Ibirité</h1>

          <AutoCompĺete
            id="bus-line"
            options={busOptions}
            onChange={onSelectBusLine}
            placeholder="Selecione a sua linha de ônibus"
            label="horarios-onibus"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
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

      <section className="updated-lines">
        <h1>⌛ Horários sempre atualizados</h1>
        <p>Consulte os horários de ônibus do terminal de ibirité atualizados</p>

        <p>
          Atualizamos o site frequentemnete para mantermos você sempre
          atualizado sobre os novos horários de ônibus
        </p>
      </section>

      <section className="bus-types">
        <h1>🚌 Linhas de ônibus</h1>
        <h2>Troncal</h2>
        <p>
          São linhas gerenciadas pelo DERR (Departamento de Edificações e
          Estradas de Rodagem de Minas Gerais) e tem o trajeto do terminal para
          outros municípios
        </p>

        <h2>Alimentadora</h2>
        <p>
          São linhas também gerenciadas pelo DERR, que fazem o trajeto dos
          bairros para o terminal de Ibirité
        </p>

        <h2>Municipal</h2>
        <p>
          Essas linhas são gerenciadas pela Prefeitura de Ibirité e também fazem
          o trajeto dos bairros para o terminal de Ibirité
        </p>
      </section>

      <section className="values">
        <h1>💰 Valor da passagem</h1>

        <p>
          A tarifa dos ônibus das linhas <strong>troncais</strong>, custa{' '}
          <strong>{external_bus_value}</strong>.
        </p>

        <p>
          Enquanto a tarifa dos ônibus das linhas <strong>alimentadoras</strong>
          , custa <strong>{internal_bus_value}</strong>.
        </p>

        <p>
          Já a tarifa dos ônibus das linhas <strong>municipais</strong>, custa{' '}
          <strong>{municipal_bus_value}</strong>.
        </p>
      </section>

      <section className="integration">
        <h1>💳 Como funciona a integração</h1>

        <p>
          Quando você pega algum ônibus das linhas municipais ou alimentadoras{' '}
          <span className="sample">(linhas de bairro)</span> com destino ao
          terminal, caso você em seguida for pegar um ônibus troncal{' '}
          <span className="sample">
            (linhas que vão para outros municípios)
          </span>{' '}
          você não vai precisar pagar mais {external_bus_value} para isso.
        </p>

        <p className="sample">
          Exemplo: Peguei o 3356 pagando {internal_bus_value}, em seguida irei
          pegar o 301C, desse modo eu não vou precisar pagar mais{' '}
          {external_bus_value}, eu irei pagar apenas a{' '}
          <strong>integração no valor de {internal_integration_value}</strong>.
          Pois serão {external_bus_value} - {internal_bus_value},{' '}
          <strong>
            totalizando {internal_integration_value} da integração
          </strong>
        </p>

        <p>
          Caso você for pegar um ônibus municipal a integração será{' '}
          {municipal_integration_value}. Pois serão {external_bus_value} -{' '}
          {municipal_bus_value},{' '}
          <strong>totalizando {municipal_integration_value}</strong>
        </p>

        <ul>
          Resumindo:
          <li>
            Integração de linhas municipais:{' '}
            <strong>{municipal_integration_value}</strong>
          </li>
          <li>
            Integração de linhas alimentadoras:{' '}
            <strong>{internal_integration_value}</strong>
          </li>
        </ul>

        <p className="disclaimer">
          <strong>
            Porém a integração só é valida quando o passageiro faz o pagamento
            com o cartão Ótimo
          </strong>
        </p>
      </section>
    </S.Wrapper>
  )
}

export default HomePage
