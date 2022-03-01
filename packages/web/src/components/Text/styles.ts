import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { TextVariants } from '.'

type VariantsDecorators = { [key in TextVariants]: FlattenSimpleInterpolation }

const variantDecorators: VariantsDecorators = {
  default: css`
    font-size: 1.4rem;
    color: #333;
  `,
  title: css`
    font-size: 2.4rem;
  `,
  subtitle: css`
    font-size: 1.5rem;
  `,
  smooth: css`
    color: #888;
    font-size: 1.3rem;
  `,
  disclaimer: css`
    font-size: 1.6rem;
    font-weight: bold;
    display: block;
  `,
  link: css`
    display: block;
    text-decoration: underline;
    font-size: 1.3rem;
  `
}

type WrapperProps = {
  $variant: TextVariants
}

export const Wrapper = styled.p<WrapperProps>`
  ${(p) => variantDecorators[p.$variant]}
`
