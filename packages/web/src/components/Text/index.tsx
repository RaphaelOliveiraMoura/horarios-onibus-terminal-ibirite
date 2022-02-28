import React from 'react'
import * as S from './styles'
import { ValidHtmlTextTags } from './types'

export * as TextStyles from './styles'

export type TextVariants =
  | 'default'
  | 'title'
  | 'subtitle'
  | 'smooth'
  | 'disclaimer'

export interface TextProps {
  children: React.ReactNode
  variant?: TextVariants
  as?: ValidHtmlTextTags
}

type TagsMap = { [key in TextVariants]: ValidHtmlTextTags }

const tagsMap: TagsMap = {
  default: 'p',
  title: 'h1',
  subtitle: 'h2',
  smooth: 'p',
  disclaimer: 'strong'
}

export const Text: React.FC<TextProps> = ({
  children,
  as,
  variant = 'default'
}) => {
  const textHtmlTag = as || tagsMap[variant]
  return (
    <S.Wrapper as={textHtmlTag} $variant={variant} className={variant}>
      {children}
    </S.Wrapper>
  )
}
