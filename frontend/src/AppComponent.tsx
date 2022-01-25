import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./dashbord/Dashboard";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { AuthProvider } from "./auth-provider/AuthProvider";
import { LoginPage } from "./dashbord/authentication/LoginPage";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <AuthProvider>
      <Provider template={AlertTemplate} {...options}>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </Provider>
    </AuthProvider>
  );
};
