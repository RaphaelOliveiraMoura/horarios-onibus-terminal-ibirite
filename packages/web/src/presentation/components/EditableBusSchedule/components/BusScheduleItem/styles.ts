import Tooltip from 'presentation/components/Tooltip'
import styled from 'styled-components'

export const BusScheduleItem = styled.div`
  position: relative;

  & > svg {
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;

    cursor: pointer;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    padding: 0.6rem;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -1rem;
  }

  input:focus + svg {
    z-index: 10;
    opacity: 1;
    pointer-events: all;
  }
`

export const BusScheduleInput = styled.input`
  width: 6rem;
  outline: none;
  text-align: center;
  font-size: 1.1rem;
  padding: 0.8rem;
  border: 1px solid #eee;
  border-radius: 0.4rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:focus {
    box-shadow: 1px 1px 3px var(--ligth-gray);
  }
`

export const WidgetsContainer = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  display: flex;
  z-index: 10;
`

type WidgetProps = {
  color?: string
  background?: string
}

export const Widget = styled(Tooltip)<WidgetProps>`
  background: ${({ background }) => background || '#333'};
  color: ${({ color }) => color || '#fff'};
  border-radius: 100%;
  padding: 4px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -4px;

  & > div {
    display: flex;
    cursor: pointer;
  }

  span {
    font-size: 0.7rem;
  }
`

export const ModifiersModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

export const ModifiersModalTitle = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 8px;
`

export const ModifiersModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 8px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  input {
    margin-right: 4px;
  }
`

export const ModifiersModalButton = styled.button`
  cursor: pointer;
  padding: 6px 22px;
  background: #a0937d;
  border: none;
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: all 0.4s;
  margin-bottom: 8px;

  &:hover {
    background: #8e9775;
  }

  &:focus {
    box-shadow: 1px 1px 3px #a0937d;
  }
`
