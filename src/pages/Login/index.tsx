import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Aside,
  Form,
  LoginBox,
  OpacityEffect,
  Text,
  Body,
} from './style'
import { Input } from '../../components/Input'
// @ts-ignore
import bg from '../../_assets/bg.jpg'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Container image={bg}>
      <OpacityEffect>
        <Body>
          <Aside>
            <Text>
              <h1>
                Seja bem-vindo ao <strong>CREA-CE</strong>
              </h1>
              <p>Faça login e acesse sua conta</p>
            </Text>
          </Aside>
          <Form>
            <LoginBox>
              <h2>Entre na sua conta</h2>
              <Input />
            </LoginBox>
          </Form>
        </Body>
      </OpacityEffect>
    </Container>
  )
}
