import React from 'react'
import Layout from '../components/Layout'
import { SymbolVideo} from '../components/Video'

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
const SymbolismVideoPage = () => {
  return (
    <Layout>
    <Seo title="Video: Art Translated Symbolism"/>
      <VideoPageWrapper>
        <SymbolVideo id="video" style={{ margin: '0 auto' }} />
      </VideoPageWrapper>
    </Layout>
  )
}

export default SymbolismVideoPage
