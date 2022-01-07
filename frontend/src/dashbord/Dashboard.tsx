import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./authentication/LoginForm";
import { DashboardLanding } from "./DashboardLanding";
import { DashboardHeader } from "./Header";
import {DashboardSidebar} from  './Sidebar'
import { AddCustomer } from "./customer/AddCustomer";
// import { AddTransaction } from "./transaction/AddTransaction";
import { AddDepositForm } from './transaction/AddTransaction'
import {Header1}  from     "./Header1"
import { CustomarList } from "./customer/CustomarList";
import {AccountTable} from "./accounts/AccountSummary"



// const Wrapper = styled.div`
// //   min-height: 100vh;
// //   background-color: rgba(206, 217, 216, 1);
//   `;


const devContent = {
  display: 'flex',
  height :'100vh'
};

const header={
  marginTop:'100px'
}



export const Dashboard = () => {
  return (
   
   
     <div style={devContent}>   
    <DashboardSidebar />
        <div>
        <Header1/>
        <div style={header}> 
          <Switch>
         
          <Route path="/add-customer">
            <AddCustomer />
          </Route>
          <Route path="/customer-list">
            <CustomarList />
          </Route>
          <Route path="/account-summary">
            <AccountTable/>
          </Route>
          {/* <Route path="/add-transaction">
           <AddTransaction />
         </Route> */}
         <Route path="/add-deposit">
           <AddDepositForm />
         </Route>
      </Switch>
      </div>
      </div> 
      </div>
 

    
  );
};
