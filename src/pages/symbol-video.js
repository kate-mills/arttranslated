import React from 'react'
import Video from '../components/VideoSymbol'

import Seo from '../components/Seo'

import Layout from '../components/Layout'

const SymbolismVideoPage = () => {
  return (
    <Layout showFooter={true} application={{APP_NAME: 'ART TRANSLATED FOR SYMBOLS'}}>
    <Seo title="Video: Art Translated Symbolism"/>
      <Video id="video"/>
    </Layout>
  )
}

export default SymbolismVideoPage
