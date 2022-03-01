import { Text } from 'components/Text'
import React from 'react'
import * as S from './styles'

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <Text variant="title">Terminal de Ibirité</Text>

      <S.Content>
        <div>
          <Text variant="subtitle">Sobre nós</Text>
          <Text variant="smooth">
            Trabalhamos para lhe proporcionar uma melhor experiência,
            disponibilizando horários sempre atualizados
          </Text>

          <Text variant="subtitle">Contato</Text>
          <Text>raphaeldeoliveiramoura@gmail.com</Text>
        </div>

        <div>
          <Text variant="subtitle">Links relacionados</Text>
          <Text variant="link" href="/politicas-de-privacidade">
            Política de Privacidade
          </Text>
          <Text variant="link" href="/#valores-passagem">
            Tarifa dos ônibus
          </Text>
          <Text variant="link" href="/#integracao">
            Como funciona a integração ?
          </Text>
          <Text variant="link" href="/#tipos-de-linhas">
            Linhas de ônibus
          </Text>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}
