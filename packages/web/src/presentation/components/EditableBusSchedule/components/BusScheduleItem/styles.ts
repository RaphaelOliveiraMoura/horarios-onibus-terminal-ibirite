import styled, { css } from 'styled-components'

type BusScheduleItemProps = {
  focused: boolean
}

export const BusScheduleItem = styled.div<BusScheduleItemProps>`
  padding: 0.8rem;
  border: 1px solid #eee;
  border-radius: 0.4rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ focused }) =>
    focused &&
    css`
      box-shadow: 1px 1px 3px var(--ligth-gray);
    `}

  &:hover > svg {
    display: block;
    z-index: 10;
    opacity: 1;
    pointer-events: all;
  }

  & > svg {
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;

    cursor: pointer;
    background: #fff;
    border-radius: 100%;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.1rem;
    border-radius: 100%;
    position: absolute;
    right: -1rem;
  }
`

export const BusScheduleInput = styled.input`
  width: 4rem;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  font-size: 1.1rem;
`
