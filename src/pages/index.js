import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Home() {
  return (
    <Layout>
      <div className="body">
        Have fun, be smarter, challenge yourself, open up your eyes to a new
        world, communicate with people over time, impress your friends and learn
        an entirely new language.
      </div>

      <div className="body">
        Welcome to a new world. Try our new mobile apps leveraging new
        technologies and mobile capabilities.
      </div>

    <div className="flex-div">

      <Link to="/art-translated-for-symbols"> {' '} Art Translated for Symbols{' '} </Link>
      <StaticImage src={'../images/Art-Translated-For-Symbols.png'} alt="" width={75} height={75} />
    </div>
    <div className="flex-div">
      <Link to="/art-translated-for-movements">Art Translated for Movements</Link>
      <StaticImage src={'../images/Art-Translated-For-Movements.png'} alt="" width={75} height={75} />
    </div>
    </Layout>
  )
}
