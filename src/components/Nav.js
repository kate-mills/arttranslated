import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import styled from 'styled-components'

const Navbar = ({ src, title, className }) => {
  return (
    <NavbarWrapper className={className}>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-icon">
            <GatsbyImage
              image={getImage(src)}
              alt=""
              width={100}
              height={100}
              placeholder="blurred"
            />
          </Link>
        </div>
        <div className="navbar-container">
          <h2 className="navbar-brand">Art Translated</h2>
          <p className="navbar-flexible-title">{title}</p>
          <p className="navbar-brand">
            <span className="navbar-fixed-text">Understand the</span>
            <span className="navbar-fixed-text">Language of Art</span>
          </p>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  & {
    div.navbar {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
    }
    .navbar-brand {
      font-size: 1.3rem;
      margin: 0 auto;
      margin-right: 0;
      text-align: right;
      margin-left: 1rem;
    }
    span.navbar-fixed-text {
      display: block;
      font-size: 0.9rem;
    }
    p.navbar-flexible-title {
      margin-top: 0;
      text-align: right;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
  }
`

export default Navbar
