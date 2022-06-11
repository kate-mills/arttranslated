import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <div className="body">
        Welcome to the language of art. Have fun, be smarter, challenge yourself
        and open up your eyes to a new world. Understand what artists and their
        patrons wanted to say to you over the centuries of Western Civilization.
        Learn their language.
      </div>

      <div className="body">
        Download our mobile apps and use emerging technologies and mobile
        devices to advance your appreciation of art and culture.
      </div>

        <div className="index-flex-row">
          <div className="index-flex-div">
            <Link to="art-translated-for-symbols" className="bold">
              Art Translated for Symbols &#x3e;
            </Link>{' '}
            Enter a symbol and get the meanings.
            <StaticImage
    objectFit={'fill'}
    cropFocus={'top'}
              width={300}
              src={'../images/Mobile-Images/art-translated-for-art-symbols.png'}
              alt=""
            />
          </div>
          <div className="index-flex-div">
            <Link to="art-translated-for-movements" className="bold">
    Art Translated for Art Movements &#x3e;
            </Link>{' '}Capture an image, understand the style.
            <StaticImage
              width={300}
              src={'../images/Mobile-Images/art-translated-for-art-movements.png'}
              alt=""
            />
          </div>
      </div>

    </Layout>
  )
}

export default IndexPage
