/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react'
import Navbar from './Nav'
import './layout.css'

const Layout = ({title="Art Translated Mobile Apps", children }) => {

  return (
    <>
      <Navbar/>
    <h2>{title}</h2>
      {children}

    </>
  )
}

export default Layout
