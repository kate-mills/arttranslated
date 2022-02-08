import React from "react"
import Layout from '../components/Layout'
import {Link} from 'gatsby'

export default function Home() {
  return <Layout>
    <h1>Oops! It's a dead end.</h1>
    <div className="flex-btns">
      <Link to="/" className="donate-btn">Back to home page</Link>
    </div>
  </Layout>
 
}
