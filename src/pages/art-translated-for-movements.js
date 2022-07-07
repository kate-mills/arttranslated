import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import { Link } from 'gatsby'

const MovmentsPage = () => {
  return (
    <Layout>
      <Seo
        title={`Art Translated Movement Classifier`}
        description={`Have Fun While Identifying And Learning About Western Art Movements or Styles. Where You Are - When You Want It`}
      />
      <section>
        <div className="section-feature-image drop-shadow">
          <Link
            to="/movement-video"
            title="Watch Video of the Art Translated for Movements Mobile App"
          >
          <StaticImage
            className="feature-image"
            src="../images/full-page/for-movements-featureImg.jpg"
            alt="Three horizontal snapshots with arrows describing mobile application flow for Art Translated Movent Classifier App."
            placeholder="blurred"
            layout="constrained"
            format="webp"
            height={336}
          />
    </Link>
        </div>
        <h1>Art Translated for Art Movements</h1>
        <div className="article">
          <p className="article-text">
            <Link to="/movement-video" title="Watch Video of Art Translated Movement Classifier Mobile App" className="watch-video">
              Video of Art Translated Movement Classifier Mobile App</Link>
          </p>
        </div>
        <div className="article">
          <h3 className="article-heading">
            Have Fun While Identifying And Learning About Western Art Movements
            or Styles (e.g. Impressionism) Where You Are - When You Want It
          </h3>
          <p className="article-text">
            You see an interesting piece of art at home or elsewhere and you
            wonder what it means and what is its place in art history. You grab
            your phone and capture an image of this art. Suddenly a world of
            interesting, relevant information comes to you almost magically. Do
            you agree with our conclusion? Did our result tell you things you
            didn’t notice or didn’t know? Do the experts agree? Download the app
            and have great fun and stimulate discussion with your friends with
            this fast, concise app that entertains and also informs you about
            Western Art history.
          </p>
        </div>

        <div className="article">
          <h3 className="article-heading">
            Be Smarter, Challenge Yourself, Impress People, Have Fun
          </h3>
          <p className="article-text">
            Not only does this app identify the movements or styles of the art
            work but will give you information to retain and learn as well.
            Results are written as small bits of digestible information in ways
            it can be remembered. For example, we give you an artist whose style
            you might know from popular culture, i.e. Van Gogh, to quickly link
            you to the movement. Or we give a few specific words of description
            such as ‘squares, animals, lots of the color red’ to help you
            identify and remember the movement.
          </p>

          <p className="article-text">
            First the app identifies the image’s movement or other possible
            candidate movements. You can then click and learn more finding short
            guides on: how to recognize and remember the movement, why it is
            different and distinct, why it even started, why is it no longer
            popular, what artists best typify the style, what forms and
            materials are typically used, what did critics say about it at the
            time, what are interesting or unusual facts about the period and
            much more.
          </p>
        </div>

        <div className="article">
          <h3 className="article-heading">
            Gobbledygook On How It Works - Or Just Download It!
          </h3>
          <p className="article-text">
            With a camera within the app the user takes a photograph and the app
            immediately analyzes the image and identifies one or multiple
            possible movements presented in descending order of probability if
            there are more than one. The user then selects the highest
            probability and gets information on the movement. Behind the app is
            the use of machine learning and the writers.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default MovmentsPage
