import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/presentation/styles/global'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
