import React from "react";
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt=""  className="logo" height="83px" />
      </div>
    </nav>
  )
}

export default Navbar
