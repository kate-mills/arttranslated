import React from 'react'
import Layout from '../components/Layout'
import { MovementVideo } from '../components/Video'
import Seo from '../components/Seo'

import styled from 'styled-components'

const VideoPageWrapper = styled.div`
  & {
    margin: auto;
  }
`

const MovementVideoPage = ()=> {
  return (
    <Layout>
    <Seo title="Video: Art Translated Movement Classifier"/>
      <VideoPageWrapper>
        <MovementVideo id="video" />
      </VideoPageWrapper>
    </Layout>
  )
}

export default MovementVideoPage
