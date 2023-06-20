import styled from 'styled-components'

export const Container = styled.div<{ image: any }>`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;

  // background: url(${(props) => props.image}), rgba(0, 0, 0, 0.4);

  background: url(${(props) => props.image}) no-repeat center center fixed;
  background-size: cover;
  color: ${({ theme }) => theme.backgroundColor};

  /* background-image: url('../../_assets/bg.jpg'); */
  /* background-size: cover;
  background-position: center; */
  /* background-color: ${({ theme }) => theme.secondaryColor};
  width: 100%;
  height: 100vh; */
  /* filter: blur(7.5px); */
`
