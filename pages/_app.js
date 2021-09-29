import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../modules/layout/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
