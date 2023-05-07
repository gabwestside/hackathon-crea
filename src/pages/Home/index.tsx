import React from 'react'
import Stepper from '../../components/Steppers'

import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <Stepper
        steps={[
          'Dados Informativos',
          'Entidades e Ação',
          'Atividades contratadas',
          'Contrato',
          'Opcionais',
          'Finalização',
        ]}
      ></Stepper>
    </Container>
  )
}
