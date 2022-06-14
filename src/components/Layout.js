/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
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
    {!hideFooter && <Footer/>}
    </React.Fragment>
  )
}
Layout.defaultProps = {
  hideFooter: false,
}
export default Layout
