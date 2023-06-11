import { createGlobalStyle } from 'styled-components'
import themeType from './types/theme'

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

export const theme: themeType = {
  primaryColor: '#152852',
  secondaryColor: '#9ab3ec',
  textColor: '#333',
  backgroundColor: '#fff',
  buttonColor: '#9ab3ec',
  buttonTextColor: '#fff',
  linkColor: '#152852',
  linkHoverColor: '#9ab3ec',
  confirmColor: '#48bb78'
}

export default GlobalStyles
