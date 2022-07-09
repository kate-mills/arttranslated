/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import { Link } from 'gatsby'
import 'normalize.css'
import './layout.css'

const Layout = ({ isBetaTesterPage, children }) => {
  return (
    <React.Fragment>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">{children}</main>
      <footer id="footer">
        {!isBetaTesterPage && (
          <Link to="/become-beta-tester" title="Become Beta Tester">
            Become Beta Tester
          </Link>
        )}
      </footer>
    </React.Fragment>
  )
}
Layout.defaultProps = {
  isBetaTesterPage: false,
}
export default Layout
