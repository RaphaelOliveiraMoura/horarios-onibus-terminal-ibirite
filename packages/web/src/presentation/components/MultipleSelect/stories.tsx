import { Story, Meta } from '@storybook/react/types-6-0'

import MultipleSelect from '.'

export default {
  title: 'MultipleSelect',
  component: MultipleSelect,
  args: {}
} as Meta

export const Default: Story = () => <MultipleSelect />
