import { Story, Meta } from '@storybook/react/types-6-0'

import SearchBar from '.'

export default {
  title: 'SearchBar',
  component: SearchBar,
  args: {}
} as Meta

export const Default: Story = () => <SearchBar />
