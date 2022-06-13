import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { Link } from 'gatsby'

const SymbolismPage = () => {
  return (
    <Layout>
      <Seo
        title="Art Translated for Symbols"
        description="You can now understand a new and unique artistic language now and over history with one of the first mobile apps to convey the meanings, intentions and feelings of symbols in Western art. This app is unique from most books and other reference sources using a structured database of over 120,000 indicators to translate this language in your hand anywhere in the world."
      />
      <div className="body" style={{ textAlign: 'center' }}>
        <StaticImage
          className="feature-image"
          src="../images/full-page/for-symbols-featureImg.jpg"
          alt=""
          placeholder="blurred"
          layout="constrained"
          format="webp"
          height={336}
        />
      </div>
      <div className="body">
        <h3>Translate The Language of Symbols Using Your Mobile Phone</h3>
        <p>
          Better understand and learn a new language using this fun new mobile
          app to “listen” in on the ideas, meanings, intentions and feelings
          that artists and their patrons want you to hear from the past
          thousands of years. This mobile app is unique from most such books and
          other reference sources by providing a data driven experience with
          more context and precise meanings using a structured database of over
          120,000 indicators to put these art translations in your hand quickly
          and concisely.
        </p>
      </div>

      <div className="body">
        <Link
          to="/symbol-video"
          className="go bold"
          title="Watch Video of the Art Translated Symbolism Mobile App"
        >
          Click here to see video of how it works
        </Link>
      </div>

      <div className="body">
        <h3>Fast, Concise Search Results Ranked By Probability</h3>
        <p>
          Because this app is designed specifically for a single function it is
          quicker and more relevant than a search of the mobile internet. As you
          view symbols from artists all day, every day in books, museum
          collections, parks, architecture, sculpture, decor, movies, tattoos
          and more, you can now simply enter the symbol you are seeing and find
          the meaning. You will be aided by suggestions as you type to enter
          what you are seeing more accurately. The search results are written to
          be specific and brief to get you the information quickly as is
          expected from a mobile app. Results are presented in the highest
          probability of what you are viewing and what it means.
        </p>
      </div>

      <div className="body">
        <h3>
          Finding The Right Result Aided By An Image Library Of Over 10,000
          Images
        </h3>
        <p>
          Your results will often have multiple images of the symbol as depicted
          in other works of art. Therefore you can visually confirm we are
          matching well to your symbol. Giving you multiple artistic
          interpretations of the same symbol will also let you enjoy the amazing
          and creative ways artists interpret the same symbol. Our images are
          often from a mobile camera so you will see symbols as you might
          capture them in the same real setting, context, image quality and
          viewpoint.
        </p>
      </div>
      <div className="body">
        <h3>
          No Need For A Lot Of Reading - Just Download the App And Try It.
        </h3>
      </div>
    </Layout>
  )
}

export default SymbolismPage
