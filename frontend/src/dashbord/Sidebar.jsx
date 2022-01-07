import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sidebar.css'

export const  DashboardSidebar=()=> {

        return (
            <div class="sidebar">
             <div class="logo-details">
               <i class='bx bxl-c-plus-plus'></i>
               <span class="logo_name" text="logo">Agent Bank</span>
              </div>
          <ul class="nav-links">
          <li>
          <Link to="/login">
            <i class='bx bx-grid-alt' title="Dashboard" ></i>
            <span class="links_name" >Dashboard</span>
            </Link>
        </li>
        <li>
        <Link to="/add-customer">
            <i class='bx bx-box' title="Add Customer" ></i>
            <span class="links_name">Add Customer</span>
            </Link>
        </li>
        <li>
           <Link to="/customer-list">
            <i class='bx bx-list-ul' title="Customar List" ></i>
            <span class="links_name">Customer list</span>
            </Link>
        </li>
        <li>

        <Link to="/add-deposit">
            <i class='bx bx-pie-chart-alt-2' title="Add Deposit" ></i>
            <span class="links_name">Add Transaction</span>
            </Link>
        </li>
        <li>
        <Link to="/add-withdraw">
            <i class='bx bx-coin-stack' title="Add Withdraw" ></i>
            <span class="links_name">Add Withdraw</span>
            </Link> 
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-book-alt' title="Transaction Summary" ></i>
            <span class="links_name">Transaction Summary</span>
            </Link>
        </li>
        <li>
        <Link to="/account-summary">
            <i class='bx bx-user' ></i>
            <span class="links_name">Account Summary</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-heart' ></i>
            <span class="links_name">Favrorites</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Setting</span>
            </Link>
        </li>

       
      </ul>
  </div>
        )
    
}
