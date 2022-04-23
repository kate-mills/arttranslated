/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import './layout.css'


const Layout = ({ title = 'Art Translated Mobile Apps',src='../images/mobile.png', children }) => {
  return (
    <>
    <Navbar title={title} src={src}/>
      {children}
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Art Translated Mobile Apps',
  src: '../images/mobile.png',
}

export default Layout
