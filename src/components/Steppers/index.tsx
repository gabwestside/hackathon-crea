import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

import * as Styled from './styles'

const Stepper = () => {
  const steps = ['Customer Info', 'Shipping Info', 'Payment', 'Step 4']
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      </div>
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
    </>
  )
}

export default Stepper
