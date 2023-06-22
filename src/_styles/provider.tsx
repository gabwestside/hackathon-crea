import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styled'
import { Theme } from './theme'

type ProviderProps = {
  theme?: DefaultTheme,
  children: JSX.Element | JSX.Element[]
}

export const ThemeDSProvider: React.FC<ProviderProps> = ({ children, theme =  Theme}) => (
  <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
)

