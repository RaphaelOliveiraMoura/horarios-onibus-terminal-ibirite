import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  .react-select-container {
    font-size: 1.4rem;
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

  .react-select__menu {
    z-index: 20;
  }
`
