import React from 'react'
import Stepper from '../../components/Steppers'

import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Stepper
        steps={[
          'Dados Informativos',
          'Atividades contratadas',
          'Contrato',
          'Opcionais',
          'Finalização',
        ]}
      ></Stepper>
    </Container>
  )
}
