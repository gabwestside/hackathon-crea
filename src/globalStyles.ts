import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`

type themeType = {
  primaryColor: string
  secondaryColor: string
  textColor: string
  backgroundColor: string
  buttonColor: string
  buttonTextColor: string
  linkColor: string
  linkHoverColor: string
}

export const theme: themeType = {
  primaryColor: '#152852',
  secondaryColor: '#9ab3ec',
  textColor: '#333',
  backgroundColor: '#fff',
  buttonColor: '#9ab3ec',
  buttonTextColor: '#fff',
  linkColor: '#152852',
  linkHoverColor: '#9ab3ec',
}

export default GlobalStyles
