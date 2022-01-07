import styled from "styled-components";
import { LoginLogoutButton } from "./LoginLogoutButton";

const Header = styled.div`
  height: 161px;
  background-color: rgba(83, 83, 83, 0.06);
  padding: 40px;
  box-sizing: border-box;
  display: flex;
`;

export const DashboardHeader = () => {
  return (
    <Header>
      <LoginLogoutButton />
    </Header>
  );
};


