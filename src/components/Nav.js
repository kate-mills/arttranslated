import React from "react";
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'


const Navbar = () => {
  return (
    <nav className="">
      <div className="nav-center">
        <Link to="/">

    <StaticImage
    src="../images/logo.png"
    alt=""
    height={83}
    placeholder="blurred"
    />
    </Link>
      </div>
    </nav>
  )
}

export default Navbar
