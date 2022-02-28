import styled from 'styled-components'

import { AlertBanner as SAlertBanner } from 'components/AlertBanner'

export const Wrapper = styled.div`
  width: 100%;

  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: #c9bcbc 0em 2px 3px 0px;
  padding: 0 2rem;

  .content {
    width: 100%;
    height: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    div.input {
      max-width: 300px;
      width: 100%;
    }

    svg {
      cursor: pointer;
      margin-right: 8px;
    }
  }
`

export const BusLineTitle = styled.h2`
  text-align: center;
  margin-top: 1.6rem;
  font-weight: normal;

  strong {
    font-weight: bold;
  }
`

export const BusScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const UpdateButton = styled.button`
  cursor: pointer;
  padding: 6px 22px;
  background: #a0937d;
  border: none;
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: all 0.4s;

  &:hover {
    background: #8e9775;
  }

  &:focus {
    box-shadow: 1px 1px 3px #a0937d;
  }
`

export const AlertBanner = styled(SAlertBanner)`
  margin-top: 16px;
`
