import React from 'react'
import { MovementVideo } from '../components/Video'
import Seo from '../components/Seo'

import styled from 'styled-components'
import Layout from '../components/Layout'

const VideoPageWrapper = styled.div`
  & {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: fit-content;
    max-height: fit-content;
    height: auto;
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
