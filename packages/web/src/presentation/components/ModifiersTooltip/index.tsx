import { BusModifiers } from 'domain/models'

import * as S from './styles'

export const modifiersMap = {
  [BusModifiers.AL]: function Widget(key: string) {
    return (
      <S.Widget key={key} text="Trajeto pela 040">
        <span>AL</span>
      </S.Widget>
    )
  },
  [BusModifiers.PI]: function Widget(key: string) {
    return (
      <S.Widget
        key={key}
        text="Ônibus sai do bairro"
        color="#333"
        background="#ddd"
      >
        <span>PI</span>
      </S.Widget>
    )
  },
  [BusModifiers.PREV]: function Widget(key: string) {
    return (
      <S.Widget key={key} text="Previsão">
        <span>PR</span>
      </S.Widget>
    )
  },
  [BusModifiers.RI]: function Widget(key: string) {
    return (
      <S.Widget
        key={key}
        text="Ônibus chega no bairro e recolhe"
        color="#333"
        background="#ddd"
      >
        <span>RI</span>
      </S.Widget>
    )
  }
}