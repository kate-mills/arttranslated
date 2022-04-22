import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = ({ title = 'Art Translated Mobile Apps' }) => {
  return (
    <nav className="flex-nav">
      <h2 className="flex-header">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt=""
            height={43}
            placeholder="blurred"
          />
        </Link>
        <span className="title">{title}</span>
      </h2>

      <div className="">
        <Link className="text" to="/art-translated-for-symbols">
          Symbols
        </Link>

        <Link className="text" to="/art-translated-for-movements">
          Movements
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
