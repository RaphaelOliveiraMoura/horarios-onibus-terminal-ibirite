import styled, { css } from 'styled-components'

type DialogProps = {
  isOpen: boolean
}

export const Dialog = styled.div<DialogProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0009;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  opacity: 1;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`

export const DialogContent = styled.div`
  background: #fff;
  padding: 0.8rem;
  border-radius: 8px;
`
