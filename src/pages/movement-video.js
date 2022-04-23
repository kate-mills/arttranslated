import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import {RegVideo} from '../components/Video'

export default function Home({ data }) {
  const {
    file: {
      childImageSharp: { gatsbyImageData: src },
    },
  } = data
  return (
    <Layout src={src} title="for Movements">
    <p style={{textAlign: 'center'}}>
    <Link to="/art-translated-for-movements">Close Video</Link>
    </p>
    <RegVideo/>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "for-movements-icon.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          width:100 
          height:100 
        )
      }
    }
  }
`
