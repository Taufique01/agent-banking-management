import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sidebar.css'

export const  DashboardSidebar=()=> {

        return (
            <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
      <span class="logo_name">Agent Bank</span>
    </div>
      <ul class="nav-links">
        <li>
         <Link to="/login">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-box' ></i>
            <span class="links_name">Product</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Order list</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Analytics</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Stock</span>
            </Link> 
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Total order</span>
            </Link>
        </li>
        <li>
        <Link to="/login">
            <i class='bx bx-user' ></i>
            <span class="links_name">Team</span>
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
        <li class="log_out">
        <Link to="/login">
       <i class='bx bx-log-out'></i>
         <span class="links_name">Log out</span>
         </Link>
         </li>
      </ul>
  </div>
        )
    
}
