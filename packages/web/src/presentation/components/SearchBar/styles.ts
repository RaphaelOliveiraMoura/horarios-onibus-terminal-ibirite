import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  max-width: 50rem;
`

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  align-self: stretch;
  width: 100%;

  & > svg {
    position: absolute;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const SearchInput = styled.input`
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);
  height: 100%;
  padding: 0.4rem 2.4rem 0.4rem 1.2rem;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: var(--shadow-default);
  }
`

export const FiltersIconWrapper = styled.button`
  background: none;
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);
  color: var(--dark-gray);
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color, background 0.4s;
  outline: none;
  margin-left: 0.8rem;

  &:focus {
    box-shadow: var(--shadow-default);
  }

  &:hover {
    background: var(--lighter-gray);
  }
`

const openModifiers = {
  open: css``,
  close: css`
    overflow: hidden;
    max-height: 0;
  `
}

type SearchFiltersProps = {
  open: boolean
}

export const SearchFilters = styled.section<SearchFiltersProps>`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  ${({ open }) => open && openModifiers.open}
  ${({ open }) => !open && openModifiers.close}

  & > div {
    align-self: flex-end;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--dark-gray);

  & > div {
    display: flex;
  }
`

export const RadioTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.8rem;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);

  &:focus-within {
    box-shadow: var(--shadow-default);
  }

  & + & {
    margin-left: 0.8rem;
  }
`

export const Radio = styled.input`
  margin-right: 8px;
`
