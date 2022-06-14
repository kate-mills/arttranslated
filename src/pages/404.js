import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import GoArrow from '../components/GoArrow'

const ErrorPage = () => {
  return (
    <Layout>
      <h1>Oops! It's a dead end.</h1>
      <div className="text-center">
        <Link to="/" className="back">{`Back to home page`}<GoArrow/></Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
