import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'
import { Link } from 'gatsby'

import { BsPlayCircle } from 'react-icons/bs'

const SymbolismPage = () => {
  return (
    <Layout>
      <Seo
        title="Art Translated for Symbols"
        description="You can now understand a new and unique artistic language now and over history with one of the first mobile apps to convey the meanings, intentions and feelings of symbols in Western art. This app is unique from most books and other reference sources using a structured database of over 120,000 indicators to translate this language in your hand anywhere in the world."
      />
      <section>
        <div className="section-feature-image drop-shadow play-video__block">
          <Link
            to="/symbol-video"
            title="Watch Video of the Art Translated Symbolism Mobile App"
            className="play-video__link"
          >
            <BsPlayCircle
              className="play-video__icon play-video__icon--symbols"
              title="Watch Video of the Art Translated Symbolism Mobile App"
            />

            <StaticImage
              className="feature-image"
              src="../images/full-page/for-symbols-featureImg.jpg"
              alt="Three horizontal snapshots with arrows describing mobile application flow for Art Translated Symbolism App."
              placeholder="blurred"
              layout="constrained"
              format="webp"
              height={336}
              title="Art Translated Symbolism App Flow"
            />
          </Link>
        </div>
        <h1>Art Translated For Symbols</h1>
        <div className="article">
          <h3 className="article-heading">
            Translate The Language of Symbols Using Your Mobile Phone
          </h3>
          <p className="article-text">
            Better understand and learn a new language using this fun new mobile
            app to “listen” in on the ideas, meanings, intentions and feelings
            that artists and their patrons want you to hear from the past
            thousands of years. This mobile app is unique from most such books
            and other reference sources by providing a data driven experience
            with more context and precise meanings using a structured database
            of over 120,000 indicators to put these art translations in your
            hand quickly and concisely.
          </p>
        </div>

        <div className="article">
          <p className="article-text">
            <Link
              to="/symbol-video"
              className="section-link watch-video"
              title="Watch Video of the Art Translated Symbolism Mobile App"
            >
              Click here to see video of how it works
            </Link>
          </p>
        </div>

        <div className="article">
          <h3 className="article-heading">
            Fast, Concise Search Results Ranked By Probability
          </h3>
          <p className="article-text">
            Because this app is designed specifically for a single function it
            is quicker and more relevant than a search of the mobile internet.
            As you view symbols from artists all day, every day in books, museum
            collections, parks, architecture, sculpture, decor, movies, tattoos
            and more, you can now simply enter the symbol you are seeing and
            find the meaning. You will be aided by suggestions as you type to
            enter what you are seeing more accurately. The search results are
            written to be specific and brief to get you the information quickly
            as is expected from a mobile app. Results are presented in the
            highest probability of what you are viewing and what it means.
          </p>
        </div>
        <div className="article">
          <h3 className="article-heading">
            Finding The Right Result Aided By An Image Library Of Over 10,000
            Images
          </h3>
          <p className="article-text">
            Your results will often have multiple images of the symbol as
            depicted in other works of art. Therefore you can visually confirm
            we are matching well to your symbol. Giving you multiple artistic
            interpretations of the same symbol will also let you enjoy the
            amazing and creative ways artists interpret the same symbol. Our
            images are often from a mobile camera so you will see symbols as you
            might capture them in the same real setting, context, image quality
            and viewpoint.
          </p>
        </div>
        <div className="article">
          <h3 className="article-heading">
            No Need For A Lot Of Reading - Just Download the App And Try It.
          </h3>
        </div>
      </section>
    </Layout>
  )
}

export default SymbolismPage
