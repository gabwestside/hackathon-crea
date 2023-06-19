import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './_routes/router'

import GlobalStyles, { theme } from './globalStyles'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
)
