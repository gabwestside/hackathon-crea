import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
// @ts-ignore
import logo from '../../assets/crea-logo.png'

import { HeaderContainer, Logo, Submenu, UserIcon } from './styles'

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
