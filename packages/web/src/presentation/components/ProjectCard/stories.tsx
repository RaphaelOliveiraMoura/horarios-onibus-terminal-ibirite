import { Story, Meta } from '@storybook/react/types-6-0'

import ProjectCard from '.'
import props from './mock'

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: {
    title: props.project.title,
    description: props.project.description,
    lastUpdate: props.project.lastUpdate,
    techs: props.project.techs,
    comments: props.project.comments
  }
} as Meta

export const Default: Story = (args) => (
  <ProjectCard
    {...props}
    project={{
      ...props.project,
      title: args.title,
      description: args.description,
      lastUpdate: args.lastUpdate,
      techs: args.techs,
      comments: args.comments
    }}
  />
)

export const WithoutComments: Story = (args) => (
  <ProjectCard
    {...props}
    project={{
      ...props.project,
      title: args.title,
      description: args.description,
      lastUpdate: args.lastUpdate,
      techs: args.techs,
      comments: []
    }}
  />
)
WithoutComments.args = {}
