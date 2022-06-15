import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import GoArrow from '../components/GoArrow'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <section className="welcome">
        <article className="flex-row">
          <p>
            Welcome to the language of art. Have fun, be smarter, challenge
            yourself and open up your eyes to a new world. Understand what
            artists and their patrons wanted to say to you over the centuries of
            Western Civilization. Learn their language.
          </p>
          <p>
            Download our mobile apps and use emerging technologies and mobile
            devices to advance your appreciation of art and culture.
          </p>
        </article>
        <article className="flex-row">
          <div className="flex-div">
            <Link to="/art-translated-for-symbols">
              Art Translated for Symbols
              <GoArrow />
            </Link>{' '}
            <p className="text-center tiny-font">
              Enter a symbol and get the meanings.
            </p>
            <div className="background-white drop-shadow">
              <Link to="/art-translated-for-symbols">
                <StaticImage
                  className="drop-shadow"
                  width={300}
                  src={'../images/UI/art-translated-for-symbols.png'}
                  alt="Example output depicted on mobile phone from Art Translated for Symbols."
                />
              </Link>
            </div>
          </div>
          <div className="flex-div">
            <Link to="/art-translated-for-movements">
              Art Translated for Art Movements
              <GoArrow />
            </Link>
            <p className="text-center tiny-font">
              Capture an image, understand the style.
            </p>

            <div className="background-white drop-shadow">
              <Link to="/art-translated-for-movements">
                <StaticImage
                  className="drop-shadow"
                  width={300}
                  src={'../images/UI/art-translated-for-art-movements.png'}
                  alt="Example output depicted on mobile phone from Art Translated for Art Movements."
                />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
