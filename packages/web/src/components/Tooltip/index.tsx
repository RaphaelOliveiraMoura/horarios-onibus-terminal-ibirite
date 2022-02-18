import React from 'react'
import * as S from './styles'

export interface TooltipProps {
  children: React.ReactNode
  className?: string
  text: string
  position?: 'top' | 'bottom'
}

const Tooltip = ({
  className,
  children,
  text,
  position = 'top'
}: TooltipProps) => {
  return (
    <S.Wrapper className={className}>
      <S.TooltipContent text={text} position={position}>
        {children}
      </S.TooltipContent>
    </S.Wrapper>
  )
}

export default Tooltip
