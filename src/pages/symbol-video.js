import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { SymbolVideo, CloseVideo } from '../components/Video'

import Seo from '../components/Seo'

import styled from 'styled-components'

const VideoPageWrapper = styled.div`
  & {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: fit-content;
    max-height: fit-content;
    height: 100%;
  }
`

const SymbolismVideoPage = ({data}) => {
  const {
    file: {
      childImageSharp: { gatsbyImageData: src },
    },
  } = data
  return (
    <Layout src={src} title="Symbolism">
    <Seo title="Video: Art Translated Symbolism"/>

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

export default SymbolismVideoPage
