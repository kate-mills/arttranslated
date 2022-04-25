/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import './layout.css'


const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
      {children}
      <Footer />
    </>
  )
}
export default Layout
