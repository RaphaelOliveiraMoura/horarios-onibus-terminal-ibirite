import styled, { css } from 'styled-components'

import { TooltipProps } from '.'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const positionModifiers = {
  top: css`
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-120%);
  `,
  bottom: css`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(120%);
  `
}

type TooltipContentProps = Pick<TooltipProps, 'text'> & {
  position: 'top' | 'bottom'
}

export const TooltipContent = styled.div<TooltipContentProps>`
  &::after {
    content: '';
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover&::after {
    ${({ text, position }) => css`
      ${positionModifiers[position]}

      content: '${text}';
      position: absolute;
      width: max-content;
      max-width: 10rem;
      text-align: center;
      background-color: #555;
      color: #fff;
      border: 1px solid #444;
      border-radius: 0.4rem;
      padding: 0.4rem 0.8rem;
      overflow-wrap: anywhere;
      opacity: 1;
      z-index: 50;
    `}
  }
`
