import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
// @ts-ignore
import logo from '../../_assets/crea-logo.png'

import { HeaderContainer, Logo, Submenu, UserIcon } from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt='Logo' />
      <Submenu>ART Tutorial</Submenu>
      <UserIcon>
        <AiOutlineUser />
      </UserIcon>
    </HeaderContainer>
  )
}

export default Header
