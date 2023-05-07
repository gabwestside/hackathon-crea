import React, { ReactNode, useState } from 'react'
import { TiTick } from 'react-icons/ti'

import * as Styled from './styles'

interface StepperProps {
  steps: string[]
  children?: ReactNode | ReactNode[]
}

const Stepper: React.FC<StepperProps> = ({ steps, children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  return (
    <Styled.Container>
      <Styled.HeaderSteps>
        {steps.map((step, i) => (
          <Styled.StepItem key={i} notFirst={i !== 0}>
            <Styled.Step
              active={currentStep === i + 1}
              complete={i + 1 < currentStep || complete}
            >
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </Styled.Step>

            <Styled.StepText complete={i + 1 < currentStep || complete}>
              {step}
            </Styled.StepText>
          </Styled.StepItem>
        ))}
      </Styled.HeaderSteps>

      <Styled.MidContent>{children}</Styled.MidContent>

      <Styled.ButtonContent>
        {!complete && (
          <Styled.Button
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1)
            }}
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </Styled.Button>
        )}
      </Styled.ButtonContent>
    </Styled.Container>
  )
}

export default Stepper
