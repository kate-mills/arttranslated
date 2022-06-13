/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import { Link } from 'gatsby'
import 'normalize.css'
import './layout.css'


const Layout = ({ hideFooter, children }) => {
  return (
    <React.Fragment>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <section>{children}</section>
      </main>
      <footer id="footer">
        {!hideFooter ? (
          <Link className={'btn'} to="/testflight">
            Become Beta Tester
          </Link>
        ) : <></>
        }
      </footer>
    </React.Fragment>
  )
}
Layout.defaultProps = {
  hideFooter: false,
}
export default Layout
