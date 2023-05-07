import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createRoot } from 'react-dom/client';
import GlobalStyles, { theme } from './globalStyles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
