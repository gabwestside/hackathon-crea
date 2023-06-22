import styled from 'styled-components'
import '../../_styles/styled'

export const Container = styled.div<{ image: any }>`
  width: 100%;
  height: 100vh;

  z-index: 1;

  background: url(${({ image }) => image}) no-repeat center center fixed;
  background-size: cover;
`

export const OpacityEffect = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkOpacity};

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`

export const Body = styled.div`
  width: 100%;
  max-width: 88rem;
  height: 100%;
  max-height: 56rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.sizes['60px']};
  color: ${({ theme }) => theme.colors.high.pure};
`

export const Aside = styled.aside`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.div`
  align-self: center;

  > h1 {
    font-size: ${({ theme }) => theme.sizes['48px']};
    width: 100%;
    max-width: ${({ theme }) => theme.sizes['464px']};
    margin: ${({ theme }) => theme.sizes['12px']} 0;
  }

  > p {
    font-size: ${({ theme }) => theme.sizes['24px']};
    font-weight: ${({ theme }) => theme.font.weight.tiny};
  }
`

export const Form = styled.aside`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBox = styled.aside`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes['500px']};
  height: 100%;
  height: ${({ theme }) => theme.sizes['564px']};

  background-color: ${({ theme }) => theme.colors.darkestOpacity};
  border-radius: ${({ theme }) => theme.sizes['12px']};
  gap: ${({ theme }) => theme.sizes['8px']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: ${({ theme }) => theme.sizes['32px']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`
