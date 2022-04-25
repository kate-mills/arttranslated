import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

import AnchorArrow from '../components/AnchorArrow'

export default function Home({ data }) {
  const {
    file: {
      childImageSharp: { gatsbyImageData: src },
    },
  } = data

  return (
    <Layout title="for Symbols" src={src}>
      <div className="body" style={{textAlign: 'center'}}>
        <StaticImage
          className="feature-image"
          src="../images/for-symbols-featureImg.jpg"
          alt=""
          placeholder="blurred"
          layout="constrained"
          format="webp"
          height={336}
        />
    </div>
    <div className="body">
        <h3>Translate The Language of Symbols Using Your Mobile Phone</h3>
        You can now understand a new and unique artistic language now and over
        history with one of the first mobile apps to convey the meanings,
        intentions and feelings of symbols in Western art. This app is unique
        from most books and other reference sources using a structured database
        of over 120,000 indicators to translate this language in your hand
        anywhere in the world.
      </div>

      <div className="body">
        <AnchorArrow
          goTo="/symbol-video#video"
          text={'Video of the Art Translated Symbolism Mobile App.'}
        />
      </div>

      <div className="body">
        <h3>Fast, Concise Search Results Ranked By Probability</h3>
        Because this app is designed specifically for this single function it is
        quicker and more relevant than a search of the mobile internet. As you
        view symbols from artists all day, every day in books, streets, museum
        collections, parks, architecture, sculpture, decor, movies, tattoos and
        more you can now simply enter the symbol you are seeing into this app.
        You will be aided by suggestions as you type, to find your specific
        symbol. Then the search results are written to be specific and brief to
        get you quick information expected from a mobile app and are presented
        by highest probability of what you are viewing and what it means to save
        you time.
      </div>

      <div className="body">
        <h3>
          Finding The Right Result Aided By An Image Library Of Over 10,000
          Images
        </h3>
        So that you can confirm we are finding the meanings for the same symbols
        you are seeing most of your results will be accompanied with one or more
        images. The images are often from phone cameras so you will often see
        them in the same real setting, context, image quality and viewpoint that
        you are viewing them. Images also let you wonder at the amazing creative
        ways artists interpret the representation of the same symbol.
      </div>
      <div className="body">
        <h3>
          No Need For A Lot Of Reading - Just Download the App And Try It.
        </h3>
      </div>
      <div className="body">
        <h3 style={{ color: 'red', fontSize: '1rem' }}>[Download Functionality]</h3>
      </div>
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
          transformOptions: { grayscale: false }
          width: 100
          height: 100
        )
      }
    }
  }
`
