import React from 'react'
import Layout from '../components/Layout'
import { MovementVideo } from '../components/Video'
import Seo from '../components/Seo'

import styled from 'styled-components'

const VideoPageWrapper = styled.div`
  & {
    display: relative;
    margin: auto;
    max-width: fit-content;
    max-height: fit-content;
  }
`

const MovementVideoPage = ()=> {
  return (
    <Layout>
    <Seo title="Video: Art Translated Movement Classifier"/>
      <VideoPageWrapper>
        <MovementVideo style={{margin: '0 auto'}}/>
      </VideoPageWrapper>
    </Layout>
  )
}

export default MovementVideoPage
