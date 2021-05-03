import { Story, Meta } from '@storybook/react/types-6-0'

import NavigationSection from '.'

export default {
  title: 'NavigationSection',
  component: NavigationSection,
  args: {}
} as Meta

export const WithoutProfile: Story = () => <NavigationSection />

export const WithProfile: Story = (args) => <NavigationSection {...args} />

WithProfile.args = {
  profile: {
    picture:
      'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4',
    name: 'Raphael de Oliveira',
    pontuation: 1000
  }
}
