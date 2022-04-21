import React from "react";
import logo from '../images/logo.png'
import {Link} from 'gatsby'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/"> <img src={logo} alt=""  className="logo" height="83px" /></Link>
      </div>
    </nav>
  )
}

export default Navbar
