import styled, { css } from 'styled-components'

export const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36rem;

  ${({ notFirst }) =>
    notFirst &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        right: 50%;
        top: 33%;
        transform: translateY(-50%) translateX(50%);
        background-color: #cbd5e0;
      }
    `}
`

export const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  z-index: 10;
  background-color: #2d3748;
  border-radius: 50%;
  font-weight: bold;
  color: #fff;

  ${({ active }) =>
    active &&
    css`
      background-color: #4fd1c5;
    `}

  ${({ complete }) =>
    complete &&
    css`
      background-color: #48bb78;
    `}
`

export const StepText = styled.p`
  margin-top: 1.6rem;
  color: #fff;

  ${({ complete }) =>
    complete &&
    css`
      color: #fff;
    `}
`

export const Button = styled.button`
  margin-top: 2.4rem;
  padding: 1rem 2rem;
  border: none;
  background-color: #48bb78;
  color: #fff;
  font-weight: bold;
  border-radius: 0.8rem;
  cursor: pointer;
`
