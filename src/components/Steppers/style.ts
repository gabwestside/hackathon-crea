import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const MidContent = styled.div`
  width: 100%;
  height: 50vh;

  border: 1px solid green;
`

export const HeaderSteps = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 1330px;

  margin: 0.5rem;
`

export const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28rem;

  ${({ notFirst }) =>
    notFirst &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        right: 100%;
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
  width: 3rem;
  height: 3rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  font-weight: bold;
  color: #fff;

  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.primaryColor};
    `}

  ${({ complete }) =>
    complete &&
    css`
      background-color: ${({ theme }) => theme.confirmColor};

      &::before {
        background-color: ${({ theme }) => theme.confirmColor};
      }
    `}
`

export const StepText = styled.p`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.primaryColor};

  ${({ complete }) =>
    complete &&
    css`
      color: #fff;
    `}
`

export const ButtonContent = styled.div`
  /* width: 100vw;

  position: relative;

  display: flex;
  
  border: 1px solid green; */
`

export const Button = styled.button`
  margin-top: 2.4rem;
  padding: 1rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.confirmColor};
  color: ${({ theme }) => theme.buttonTextColor};
  font-weight: bold;
  border-radius: 0.8rem;
  cursor: pointer;
`
