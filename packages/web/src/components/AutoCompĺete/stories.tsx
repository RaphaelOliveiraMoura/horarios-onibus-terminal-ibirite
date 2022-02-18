import { Story, Meta } from '@storybook/react/types-6-0'

import AutoCompĺete from '.'

export default {
  title: 'AutoCompĺete',
  component: AutoCompĺete,
  args: {}
} as Meta

export const Default: Story = () => (
  <AutoCompĺete
    id="AutoCompleteId"
    label="AutoCompleteLabel"
    placeholder="AutoCompletePlaceholder"
    options={[]}
  />
)
