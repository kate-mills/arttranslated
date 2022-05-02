import React from 'react'
import Layout from '../components/Layout'
import { SymbolVideo} from '../components/Video'

import Seo from '../components/Seo'

import styled from 'styled-components'

const VideoPageWrapper = styled.div`
  & {
    margin: auto;
  }
`
const SymbolismVideoPage = () => {
  return (
    <Layout>
    <Seo title="Video: Art Translated Symbolism"/>
      <VideoPageWrapper>
        <SymbolVideo id="video" style={{}} />
      </VideoPageWrapper>
    </Layout>
  )
}

export default SymbolismVideoPage
