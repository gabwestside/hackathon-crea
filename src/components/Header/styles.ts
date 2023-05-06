import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  padding: 16px;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const Submenu = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin-right: 24px;
`;

export const UserIcon = styled.div`
  background-color: #fff;
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;
