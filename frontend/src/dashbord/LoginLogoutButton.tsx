import { Link, useHistory } from "react-router-dom";
import { Button } from "../design-system/Button";
import styled from "styled-components";
import { useAuthentication } from "../auth-provider/AuthProvider";
import { useLogoutClient } from "./logoutClient";

const TopRightBar = styled.div`
  position: absolute;
  right: 40px;
`;

export function LoginLogoutButton() {
  const { isLoggedIn, logout } = useAuthentication();
  const history = useHistory();
  const {logoutFromServer}  =useLogoutClient();  

  const handleLogoutClick = () => {
    logoutFromServer();
    logout();
    history.push('/login');
  };

  return (
    <>
      {isLoggedIn || (
        <Link to="/login">
          <TopRightBar>
            <Button>Login</Button>
          </TopRightBar>
        </Link>
      )}

      {isLoggedIn && (
        <TopRightBar>
          <Button onClick={handleLogoutClick}>Logout</Button>
        </TopRightBar>
      )}
    </>
  );
}
