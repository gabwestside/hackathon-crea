import React from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'
// @ts-ignore
import bg from '../../_assets/bg.jpg'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Container image={bg}>
      <h1>
        Seja bem-vindo ao <strong>CREA-CE</strong>
      </h1>
      <p>Faça login e acesse sua conta</p>
    </Container>
  )
}
