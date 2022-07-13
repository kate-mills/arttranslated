/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import { Link } from 'gatsby'
import 'normalize.css'
import './layout.css'



const Layout = ({application, showFooter, children}) => {

  return (
    <React.Fragment>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">{children}</main>
      <footer id="footer">
     {(
       (showFooter === true ) &&(<Link to="/become-beta-tester" state={application}>Become Beta Tester </Link>)
     )}
      </footer>
    </React.Fragment>
  )
}
Layout.defaultProps = {
  application: {APP_NAME: 'NO PREFERENCE'},
  showFooter: true,
}
export default Layout
