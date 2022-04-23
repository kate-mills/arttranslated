import React from 'react'
import Layout from '../components/Layout'
//import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { MovementVideo, CloseVideo } from '../components/Video'

import styled from 'styled-components'

const VideoPageWrapper = styled.div`
  & {
    position: relative;
    width: 100%;
    max-width: fit-content;
    max-height: fit-content;
    height: 100%;
  }
`

export default function Home({ data }) {
  const videoRef = React.createRef()
  const {
    file: {
      childImageSharp: { gatsbyImageData: src },
    },
  } = data
  return (
    <Layout src={src} title="for Movements">
      <VideoPageWrapper>
        <CloseVideo goTo="/art-translated-for-movements" />
        <MovementVideo videoRef={videoRef} />
      </VideoPageWrapper>
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
          width: 100
          height: 100
        )
      }
    }
  }
`
