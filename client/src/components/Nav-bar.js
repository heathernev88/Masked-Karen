import React from "react";
import '../styles/navbar.css'


import AuthNav from "./Auth-nav";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;