import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 20rem;
  width: 100%;

  .react-select-container {
    font-size: 1.2rem;
  }

  .react-select__control {
    border-color: var(--ligth-gray);
  }

  .react-select__control:hover {
    border-color: var(--ligth-gray);
  }

  .react-select__control--is-focused {
    border-color: var(--ligth-gray);
    box-shadow: var(--shadow-default);
  }
`
