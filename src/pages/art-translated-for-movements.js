import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AnchorArrow from '../components/AnchorArrow'
import Seo from "../components/Seo"


const MovmentsPage = ()=> {
  return (
    <Layout>
    <Seo title={`Art Translated Movement Classifier`}
    description={`Have Fun While Identifying And Learning About Western Art Movements or Styles. Where You Are - When You Want It`}
    />
      <div className="body" style={{textAlign: 'center'}}>
        <StaticImage
          className="feature-image"
          src="../images/for-movements-featureImg.jpg"
          alt=""
          placeholder="blurred"
          layout="constrained"
          format="webp"
          height={336}
        />
      </div>
      <div className="body">
    <AnchorArrow goTo="/movement-video#video" text={'Video of Art Translated Movement Classifier Mobile App'}/>
      </div>
      <div className="body">
        <h3>
          Have Fun While Identifying And Learning About Western Art Movements or
          Styles (e.g. Impressionism) Where You Are - When You Want It
        </h3>
        You see an interesting piece of art at home or elsewhere and you wonder
        what it means and what its place in art history is. You grab your phone
        and capture an image of this art. Suddenly a world of interesting,
        relevant information comes to you almost magically. Is the result right?
        Is it wrong? Does it see things you don’t see or didn’t know? Do experts
        agree? You get great fun and discussion with this fast, concise app that
        entertains and also informs.
      </div>

      <div className="body">
        <h3>Be Smarter, Challenge Yourself, Impress People, Have Fun</h3>
        Not only does this app identify the style or styles of the art work but
        will give you relevant information about the artwork. First get the name
        or names of the movement or possible mixes or other movements ordered by
        how we match up, Then drill down on results to find a short guides on:
        how to recognize and remember the movement, why it is different and
        distinct, why it even started, why is it no longer is popular, what
        artists best typify the style, what forms and materials are typically
        used, what did critics say about it at the time, what are interesting,
        unusual facts about the period and much more.
      </div>

      <div className="body">
        <h3>Gobbledygook On How It Works - Or Just Download It!</h3>
        With a camera within the app the user takes a photograph and the app
        immediately analyzes the image and identifies one or multiple possible
        movements presented in descending order of probability if more than one.
        The user then selects the highest probability and gets information on
        the movement. Behind the app is the use of machine learning and writers.
      </div>

      <div className="body">
        <a href="https://testflight.apple.com/v1/invite/ce491cba5b5849fbba234ab39288c7ef5e4a073abcaa422c944b2ec2a21a4c145ee345f7?ct=R6DF954536&advp=10000&platform=ios" target="_blank" rel="noreferrer">Download Movement Classifier 0.9.8 (1)</a>
      </div>
    </Layout>
  )
}

export default MovmentsPage
