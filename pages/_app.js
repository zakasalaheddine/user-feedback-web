import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { theme } from '../modules/layout/theme'
import store from 'redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
