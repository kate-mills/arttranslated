/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import 'normalize.css'
import './layout.css'



const Layout = ({ children }) => {
  return (
    <>
    <header id="header">
      <Navbar/>
    </header>
    <main id="main">
      {children}
    </main>
    <Footer/>
    </>
  )
}
export default Layout
