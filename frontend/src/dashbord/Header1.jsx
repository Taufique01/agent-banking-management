import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

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
            <div className="dropdown-container">
              <div className="hover-able">
                <span class="admin_name">User Name</span>
                <i class="bx bx-chevron-down"></i>
              </div>

              <ul className="drop-down_menu">
                <li>Profile</li>
                <li onClick={signOut}>Sign Out</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
