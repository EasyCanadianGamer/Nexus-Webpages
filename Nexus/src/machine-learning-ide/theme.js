// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const colors = {
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          50: '#f7fafc',
          // ...
          900: '#171923',
        },
        // ...
      },
}



// 3. extend the theme
const theme = extendTheme({ config , colors})

export default theme 