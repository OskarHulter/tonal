import { ChakraProvider, theme } from "@chakra-ui/react"
import ThemeToggler from '../modules/ThemeToggler'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <ThemeToggler />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
