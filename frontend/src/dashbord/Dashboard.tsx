import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./authentication/LoginForm";
import { DashboardLanding } from "./DashboardLanding";
import { DashboardHeader } from "./Header";
import { AddCustomer } from "./customer/AddCustomer";
import { AddTransaction } from "./transaction/AddTransaction";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(206, 217, 216, 1);
`;

export const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardHeader />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/login">
          <DashboardLanding />
        </Route>
        <Route path="/add-customer">
          <AddCustomer />
        </Route>
        <Route path="/add-transaction">
          <AddTransaction />
        </Route>
      </Switch>
    </Wrapper>
  );
};
