import styled, { css } from 'styled-components'

import { AlertBanner as SAlertBanner } from 'presentation/components/AlertBanner'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 100vh;
  position: relative;
`

type ContentWrapperProps = {
  inputFocused: boolean
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.4s;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  transition: all 0.5s;
  padding: 1rem;

  ${({ inputFocused }) =>
    inputFocused &&
    css`
      top: 4rem;
      transform: translateY(0);
    `}
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.6rem;
`

export const AlertBanner = styled(SAlertBanner)`
  margin-bottom: 26px;
`
