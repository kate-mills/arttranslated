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
            <Link to="/art-translated-for-symbols" className="go bold">
              Art Translated for Symbols
            </Link>{' '}
            <p className="text-center">Enter a symbol and get the meanings.</p>
    <Link to="/art-translated-for-symbols">
            <StaticImage
    objectFit={'fill'}
              width={300}
              src={'../images/Mobile-Images/art-translated-for-art-symbols.png'}
              alt="Example output depicted on mobile phone from Art Translated for Symbols."
            />
    </Link>
          </div>
          <div className="index-flex-div">
            <Link to="/art-translated-for-movements" className="bold go">
    Art Translated for Art Movements</Link>
    <p className="text-center">Capture an image, understand the style.</p>
    <Link to="/art-translated-for-movements">
            <StaticImage
              width={300}
              src={'../images/Mobile-Images/art-translated-for-art-movements.png'}
              alt="Example output depicted on mobile phone from Art Translated for Art Movements."
            />
    </Link>
          </div>
      </div>

    </Layout>
  )
}

export default IndexPage
