import { fireEvent, render, screen } from '@testing-library/react'

import SearchBar from '.'

const BaseComponent = () => <SearchBar />

describe('<SearchBar />', () => {
  it('should render with filters section hidden', () => {
    render(<BaseComponent />)

    expect(screen.getByRole('region', { hidden: true })).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('should render filters section when press filter icon', () => {
    render(<BaseComponent />)

    fireEvent.click(screen.getByTitle(/filters/i).parentElement as HTMLElement)

    expect(screen.getByRole('region', { name: /filters/i })).toHaveAttribute(
      'aria-hidden',
      'false'
    )
  })
})
