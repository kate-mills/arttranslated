import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'


export default function Home() {
  return (
    <Layout>
    <Seo />
      <div className="body">
        Have fun, be smarter, challenge yourself, open up your eyes to a new
        world, communicate with people over time, impress your friends and learn
        an entirely new language.
      </div>

      <div className="body">
        Welcome to a new world. Try our new mobile apps leveraging new
        technologies and mobile capabilities.
      </div>

      <div className="index-flex-row">
        <div className="index-flex-div">
          <Link to="/art-translated-for-symbols">
            <StaticImage
              src={'../images/for-symbols-icon.png'}
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <Link to="/art-translated-for-symbols"  className="add-before-text">
            for Symbols
          </Link>
        </div>
        <div className="index-flex-div">
          <Link to="/art-translated-for-movements">
            <StaticImage
              src={'../images/for-movements-icon.png'}
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <Link to="/art-translated-for-movements" className="add-before-text">
            for Movements
          </Link>
        </div>
      </div>
    </Layout>
  )
}
