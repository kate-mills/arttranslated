/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import './layout.css'


const Layout = ({ title = 'Art Translated Mobile Apps', children }) => {
  return (
    <>
    <Navbar title={title}/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
