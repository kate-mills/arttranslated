import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { SymbolVideo, CloseVideo } from '../components/Video'

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

export default function PageVideo({ data }) {
  const {
    file: {
      childImageSharp: { gatsbyImageData: src },
    },
  } = data
  return (
    <Layout src={src} title="for Symbols">
      <VideoPageWrapper>
        <CloseVideo goTo="/art-translated-for-symbols" />
        <SymbolVideo id="video" style={{ margin: '0 auto' }} />
      </VideoPageWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "for-symbols-icon.png" }) {
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
