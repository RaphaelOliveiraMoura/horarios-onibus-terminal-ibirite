import { Story, Meta } from '@storybook/react/types-6-0'

import { Tooltip, TooltipProps } from '.'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    text: 'sou um tooltip =)',
    position: 'top'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ marginTop: 150 }}>
    <Tooltip {...(args as TooltipProps)}>
      <button>Button with tooltip</button>
    </Tooltip>
  </div>
)
