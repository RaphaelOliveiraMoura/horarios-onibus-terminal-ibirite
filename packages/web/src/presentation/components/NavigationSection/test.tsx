import { render, screen } from '@testing-library/react'

import NavigationSection, { NavigationSectionProps } from '.'

const BaseComponent = (props: Partial<NavigationSectionProps>) => (
  <NavigationSection {...props} />
)

describe('<NavigationSection />', () => {
  it('should render github login button when not provide profile details as prop', () => {
    render(<BaseComponent />)

    expect(screen.getByText(/entrar com github/i)).toBeInTheDocument()
  })

  it('should render profile details when provided as prop and hide github button', () => {
    render(
      <BaseComponent
        profile={{
          name: 'profile_name',
          picture: 'http://profile_picture',
          pontuation: 1000
        }}
      />
    )

    expect(screen.getByText(/profile_name/i)).toBeInTheDocument()
    expect(screen.getByText(/1000 pontos/i)).toBeInTheDocument()

    const profileImage = screen.getByAltText(/imagem de perfil/i)
    expect(profileImage).toHaveAttribute('src', 'http://profile_picture')

    expect(screen.queryByText(/entrar com github/i)).not.toBeInTheDocument()
  })
})
