import React from 'react'
import Video from '../components/VideoMovement'
import Seo from '../components/Seo'
import Layout from '../components/Layout'


const MovementVideoPage = ()=> {
  return (
    <Layout>
    <Seo title="Video: Art Translated Movement Classifier"/>
      <Video id="video" />
    </Layout>
  )
}

export default MovementVideoPage
