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

// const Wrapper = styled.div`
// //   min-height: 100vh;
// //   background-color: rgba(206, 217, 216, 1);
//   `;

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
            <Route
              path="/add-customer"
              component={() => <AddCustomer authorize="" />}
            />

         <Route path="/home">
              <HomePage />
            
            
            </Route>
            <Route path="/customer-list">
              <CustomarList />
            </Route>
            <Route path="/account-summary">
              <AccountTable />
            </Route>
            {/* <Route path="/add-transaction">
           <AddTransaction />
         </Route> */}
            <Route path="/add-transaction">
              <AddTransaction />
            </Route>
            <Route path="/transaction-list">
              <TransactionTable />
            </Route>

            <Route path="/customers-ledger">
              <CustomersLedger />
            </Route>

            <Route path="/cost">
              <Cost />
            </Route>
            <Route path="/revenue">
              <Revenue />
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
};
