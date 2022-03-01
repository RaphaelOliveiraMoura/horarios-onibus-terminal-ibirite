import React from 'react'
import * as S from './styles'
import { ValidHtmlTextTags } from './types'

export type TextVariants =
  | 'default'
  | 'title'
  | 'subtitle'
  | 'smooth'
  | 'disclaimer'
  | 'link'

export interface TextProps {
  children: React.ReactNode
  variant?: TextVariants
  as?: ValidHtmlTextTags
  href?: string
}

type TagsMap = { [key in TextVariants]: ValidHtmlTextTags }

const tagsMap: TagsMap = {
  default: 'p',
  title: 'h1',
  subtitle: 'h2',
  smooth: 'p',
  disclaimer: 'strong',
  link: 'a'
}

export const Text: React.FC<TextProps> = ({
  children,
  as,
  variant = 'default',
  ...props
}) => {
  const textHtmlTag = as || tagsMap[variant]
  return (
    <S.Wrapper
      as={textHtmlTag}
      $variant={variant}
      className={variant}
      {...props}
    >
      {children}
    </S.Wrapper>
  )
}
