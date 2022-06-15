import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Jost', sans-serif`,
  },
  semanticTokens: {
    colors: {
      primary: "#5A1113",
      secondary: "#6B7D87"
    }
  }
})

export default theme
