import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './_routes/router'

import { ThemeDSProvider, GlobalStyles, Theme } from './_styles/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeDSProvider theme={Theme}>
    <GlobalStyles />
    <Router />
  </ThemeDSProvider>
)
