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
    },
    Box: {
      sizes: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      }
    }
  }
})
