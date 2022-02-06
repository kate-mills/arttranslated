import React from "react";
import {Link} from 'gatsby'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt=""  className="logo" width="335" height="102"/>
        <img src={logo} alt=""  className="logo" width="275px" height="84px"/>
      </div>
    </nav>
  )
}

export default Navbar
