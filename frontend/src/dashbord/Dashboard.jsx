import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./authentication/LoginForm";
import { DashboardLanding } from "./DashboardLanding";
import { DashboardHeader } from "./Header";
import { HomePage } from "./home/HomePage";
import { DashboardSidebar } from "./Sidebar";
import { AddCustomer } from "./customer/AddCustomer";
import { AddTransaction } from "./transaction/AddTransaction";
import { TransactionTable } from "./transaction/TransactionTable";
import { Header1 } from "./Header1";
import { CustomarList } from "./customer/CustomerList";
import { AccountTable } from "./accounts/AccountSummary";
import { CustomersLedger } from "./customer/CustomerLedger";
import { Cost } from "./cost-revenue/Cost";
import { Revenue } from "./cost-revenue/Revenue";
import { PrivateRoute } from "./PrivateRoute";

const devContent = {
  display: "flex",
  height: "100vh",
};

const header = {
  marginTop: "100px",
};

export const Dashboard = () => {
  return (
    <div style={devContent}>
      <DashboardSidebar />
      <div>
        <Header1 />
        <div style={header}>
          <Switch>
            <PrivateRoute
              path="/add-customer"
              component={() => <AddCustomer authorize="" />}
            />

            <PrivateRoute path="/home">
              <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/customer-list">
              <CustomarList />
            </PrivateRoute>
            <PrivateRoute path="/account-summary">
              <AccountTable />
            </PrivateRoute>
            <PrivateRoute path="/add-transaction">
              <AddTransaction />
            </PrivateRoute>
            <PrivateRoute path="/transaction-list">
              <TransactionTable />
            </PrivateRoute>

            <PrivateRoute path="/customers-ledger">
              <CustomersLedger />
            </PrivateRoute>

            <PrivateRoute path="/cost">
              <Cost />
            </PrivateRoute>
            <PrivateRoute path="/revenue">
              <Revenue />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};
