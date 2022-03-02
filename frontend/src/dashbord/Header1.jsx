import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { LoginLogoutButton } from "./LoginLogoutButton";


export  const  Header1=(props)=> {
  console.log(props)
  return (
    <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">{props.pathname}</span>
          </div>

          <div class="profile-details">
            <LoginLogoutButton />
          </div>
        </nav>
      </section>
  )
}

