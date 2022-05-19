import { fireEvent, render, screen } from '@testing-library/react'

import { AutoComplete, AutoCompleteProps } from '.'

const BaseComponent = (props: Partial<AutoCompleteProps>) => (
  <AutoComplete
    id="input-id"
    label="default-label"
    placeholder="default-placeholder"
    options={[]}
    {...props}
  />
)

describe('<AutoComplete />', () => {
  it('should show placeholder text when autocomplete is loaded with no default value', () => {
    render(
      <BaseComponent
        label="autocomplete-label"
        placeholder="autocomplete-placeholder"
      />
    )

    expect(screen.getByText(/autocomplete-placeholder/)).toBeInTheDocument()
  })

  it('should able select the second option with the keyboard', () => {
    render(
      <BaseComponent
        options={[
          { value: 'option1', label: 'Opção 1' },
          { value: 'option2', label: 'Opção 2' }
        ]}
      />
    )

    fireEvent.keyDown(screen.getByLabelText(/default-label/), {
      key: 'ArrowDown',
      code: 'ArrowDown'
    })

    fireEvent.keyDown(screen.getByLabelText(/default-label/), {
      key: 'ArrowDown',
      code: 'ArrowDown'
    })

    fireEvent.keyDown(screen.getByLabelText(/default-label/), {
      key: 'Enter',
      code: 'Enter'
    })

    expect(screen.getByText(/Opção 2/)).toBeInTheDocument()
  })
})
