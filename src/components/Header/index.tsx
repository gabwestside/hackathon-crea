import React from 'react'

import { HeaderContainer, Logo, Submenu, UserIcon } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src='/path/to/logo.png' alt='Logo' />
      <Submenu>ART Tutorial</Submenu>
      <UserIcon />
    </HeaderContainer>
  )
}

export default Header
