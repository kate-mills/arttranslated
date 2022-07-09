/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
//import { Link } from 'gatsby'
import 'normalize.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">{children}</main>
      <footer id="footer">
          <a href="https://testflight.apple.com/join/IyrsymGw" target="_blank" rel="noreferrer" title="Become Beta Tester Instructions">Become Beta Tester</a>
          {/*<Link to="/become-beta-tester" title="Become Beta Tester"> Become Beta Tester </Link>*/}
      </footer>
    </React.Fragment>
  )
}
export default Layout
