import { Story, Meta } from '@storybook/react/types-6-0'

import { AutoComplete } from '.'

export default {
  title: 'AutoComplete',
  component: AutoComplete,
  args: {}
} as Meta

export const Default: Story = () => (
  <AutoComplete
    id="AutoCompleteId"
    label="AutoCompleteLabel"
    placeholder="AutoCompletePlaceholder"
    options={[]}
  />
)
