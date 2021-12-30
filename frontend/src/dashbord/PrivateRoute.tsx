import { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthentication } from "../auth-provider/AuthProvider";

export const PrivateRoute = ({ children, ...rest }: any) => {
  const { isLoggedIn } = useAuthentication();

  if (isLoggedIn) {
    return <Route {...rest}>{children}</Route>;
  }

  return <Redirect to={{ pathname: "/login" }}></Redirect>;
};
