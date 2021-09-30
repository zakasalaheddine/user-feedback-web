import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'achbanlik.background'
      }
    }
  },
  colors: {
    achbanlik: {
      primary: '#ff3850',
      background: '#f5f7fb',
      normal: '#495057'
    }
  },
  components: {
    Button: {
      variants: {
        primary: {
          boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)',
          transition: 'all 0.15s ease',
          backgroundColor: 'achbanlik.primary',
          color: 'white',
          _hover: {
            boxShadow:
              '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)',
            transform: 'translateY(-2px)'
          }
        }
      }
    }
  }
})
