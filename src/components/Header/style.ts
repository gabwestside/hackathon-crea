import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 16px;

  width: 100%;
`

export const Logo = styled.img`
  height: 50px;
  width: auto;

  cursor: pointer;
`

export const Submenu = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin-right: 24px;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`
