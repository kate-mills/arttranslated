import React from 'react'
import Layout from '../components/Layout'
import { MovementVideo, CloseVideo } from '../components/Video'
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

const MovementVideoPage = ()=> {
  return (
    <Layout>
    <Seo title="Video: Art Translated Movement Classifier"/>
      <VideoPageWrapper>
    <CloseVideo goTo="/art-translated-for-movements"/>
        <MovementVideo id="video" />
      </VideoPageWrapper>
    </Layout>
  )
}

export default MovementVideoPage
