import React from 'react'
import Video from '../components/VideoSymbol'

import Seo from '../components/Seo'

import Layout from '../components/Layout'
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
const SymbolismVideoPage = () => {
  return (
    <Layout>
    <Seo title="Video: Art Translated Symbolism"/>
      <VideoPageWrapper>
        <Video id="video"/>
      </VideoPageWrapper>
    </Layout>
  )
}

export default SymbolismVideoPage
