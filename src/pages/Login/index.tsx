import React from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Container imgUrl='../../_assets/bg.jpg'>
      <h1>
        Seja bem-vindo ao <strong>CREA-CE</strong>
      </h1>
      <p>Faça login e acesse sua conta</p>
    </Container>
  )
}
