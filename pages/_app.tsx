import { ChakraProvider, theme } from '@chakra-ui/react'
import ThemeToggler from '../modules/ThemeToggler'
import Store from '../modules/Store/Store'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Store>
      <ThemeToggler />
      <Component {...pageProps} />
    </Store>
  </ChakraProvider>
}

export default MyApp
