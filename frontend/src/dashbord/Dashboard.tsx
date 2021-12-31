import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./authentication/LoginForm";
import { DashboardLanding } from "./DashboardLanding";
import { DashboardHeader } from "./Header";
import {DashboardSidebar} from  './Sidebar'
import { AddCustomer } from "./customer/AddCustomer";
import { AddTransaction } from "./transaction/AddTransaction";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(206, 217, 216, 1);
`;

const devContainer = {
  height: '100vh',
  display:'flex',
 
  
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};
export const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardHeader />
       <div className="container" style={ devContainer}>
         <div className="sidebar">
      <DashboardSidebar />
        </div>
        <div className="content">
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
      </div>
    </div>
    </Wrapper>
  );
};
