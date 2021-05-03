import { fireEvent, render, screen } from '@testing-library/react'

import mock from './mock'

import ProjectCard, { ProjectCardProps } from '.'

const BaseComponent = (props: Partial<ProjectCardProps>) => (
  <ProjectCard
    handleLikeProject={() => null}
    handleLikeComment={() => null}
    handleLikeReplyComment={() => null}
    profile={mock.profile}
    project={mock.project}
    {...props}
  />
)

describe('<ProjectCard />', () => {
  it('should render with comments section hidden', () => {
    render(<BaseComponent />)

    expect(screen.getByRole('region', { hidden: true })).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('should render show comments when press comments icon', () => {
    render(<BaseComponent />)

    fireEvent.click(screen.getByTitle(/comments/i).parentElement as HTMLElement)

    expect(screen.getByRole('region', { name: /comments/i })).toHaveAttribute(
      'aria-hidden',
      'false'
    )
  })

  it('should show filled/outlined icon when load a project based on self liked property', () => {
    render(<BaseComponent project={{ ...mock.project, liked: false }} />)

    expect(screen.getByTitle(/outlined-like/i)).toBeInTheDocument()

    render(<BaseComponent project={{ ...mock.project, liked: true }} />)

    expect(screen.getByTitle(/filled-like/i)).toBeInTheDocument()
  })

  it('should change like icon when press button', () => {
    render(<BaseComponent project={{ ...mock.project, liked: false }} />)

    expect(screen.getByTitle(/outlined-like/i)).toBeInTheDocument()

    fireEvent.click(screen.getByTitle(/outlined-like/i))

    expect(screen.getByTitle(/filled-like/i)).toBeInTheDocument()
  })
})
