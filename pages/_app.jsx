import React from 'react'
import NextNProgress from 'nextjs-progressbar'
import { createTheme, ThemeProvider } from '@mui/material'

import '../styles/globalStyles.css'
import GlobalStyles from '../styles/GlobalStyles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
})

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <NextNProgress height={5} color="#6500E0" />
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
