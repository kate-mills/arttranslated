import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const ErrorPage = () => {
  return (
    <Layout>
      <h1>Oops! It's a dead end.</h1>
      <div className="text-center">
        <Link to="/" className="back">{`< Back to home page`}</Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
