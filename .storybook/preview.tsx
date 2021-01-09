import { addDecorator } from '@storybook/react'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../modules/theme'
import { Story } from '@storybook/react/types-6-0'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

export const decorators = [
  Story =>
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
]