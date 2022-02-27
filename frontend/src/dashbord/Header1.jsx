import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { LoginLogoutButton } from "./LoginLogoutButton";

const signOut = () => {
  alert("logout");
  return <Link to="/login" />;
};

export class Header1 extends Component {
  render() {
    return (
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>

          <div class="profile-details">
            <LoginLogoutButton />
          </div>
        </nav>
      </section>
    );
  }
}
