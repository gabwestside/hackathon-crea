import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'

export const theme = {
  primaryColor: '#152852',
  secondaryColor: '#9ab3ec',
  textColor: '#333',
  backgroundColor: '#fff',
  buttonColor: '#9ab3ec',
  buttonTextColor: '#fff',
  linkColor: '#152852',
  linkHoverColor: '#9ab3ec',
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
