import React from 'react'
import * as S from './styles'

export interface TooltipProps {
  children: React.ReactNode
  text: string
  position?: 'top' | 'bottom'
}

const Tooltip = ({ children, text, position = 'top' }: TooltipProps) => {
  return (
    <S.Wrapper>
      <S.TooltipContent text={text} position={position}>
        {children}
      </S.TooltipContent>
    </S.Wrapper>
  )
}

export default Tooltip
