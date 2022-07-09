/* eslint-disable jsx-a11y/anchor-is-valid */

// Simply go to your app's TestFlight page, click an existing group, and click Enable Public Link. You can then copy the link and share it on social media, messaging platforms, email campaigns, and more.

import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

import styled from 'styled-components'

const IndexPage = ({ className }) => {
  return (
    <Layout isBetaTesterPage={true}>
      <Seo title={`Art Translated Mobile App Beta Testing`} />

      <InstructionalArticle className={className}>
        <h3>Become An Art Translated Beta Tester</h3>
        <p className="article-thank-you">
          Thank you for your interest in beta testing our fun new
          application!!!!
        </p>
        <div className="article">
          <h3 className="article-heading">How To Become A Beta Tester</h3>
          <ol className="article-ol">
            <li>
              Send an email to:{' '}
              <a href="mailto:info.arttranslated@gmail.com?subject=I want to be a beta tester!&body=All we need is your name and email below">
                info.arttranslated@gmail.com
              </a>
              {` `}
              telling us the email address and name you want us to use.
            </li>
            <div id="become-beta-tester-email-block">
              <a
                href="mailto:info.arttranslated@gmail.com?subject=I want to be a beta tester!&body=All we need is your name and email below"
                className="become-beta-tester-email-button"
              >
                Become Beta Tester
              </a>
            </div>
            <li>
              Download Apple’s TestFlight in Apple’s App Store.
              <br />
              TestFlight is Apple’s testing app and will be how we deliver the
              app(s) and updates.
            </li>
            <div className="icons">
              <figure className="">
                <StaticImage
                  src={'../images/beta-tester/appstore.jpg'}
                  alt=""
                  width={40}
                  height={40}
                />
                <figcaption>App Store</figcaption>
              </figure>
              <figure className="">
                <StaticImage
                  src={'../images/beta-tester/testflight.png'}
                  alt=""
                  width={40}
                  height={40}
                />
                <figcaption>TestFlight</figcaption>
              </figure>
            </div>

            <li>
              We will then send you an invite to your email address. Please
              download the app(s) within 48 hours or the invitation lapses.
            </li>
          </ol>
        </div>
        <div className="article">
          <h3>Ideas On How To Get Started</h3>
          <p>
            Here are some ideas to get you started and help you understand the
            scope and range of these simple but powerful apps.
          </p>

          <div className="art-translated-icons">
            <StaticImage
              className="icon"
              src={'../images/beta-tester/art-translated-for-symbols-icon.png'}
              alt=""
              width={100}
              height={100}
            />
            <p>
              With <em>Art Translated for Symbols</em> enter in these search
              words and have some fun. Enter:{' '}
              <span className="theme-color">apple, rose, fasces,</span> the
              color <span className="theme-color">red</span>,
              <span className="theme-color">
                {' '}
                swastika, breastfeeding, Leda and the Swan
              </span>
              .
            </p>
          </div>

          <div className="art-translated-icons">
            <StaticImage
              className="icon"
              src={
                '../images/beta-tester/art-translated-for-movements-icon.png'
              }
              alt=""
              width={100}
              height={100}
            />
            <p>
              With <em>Art Translated for Movements</em> all you have to do is
              point the camera and shoot OR select an image of art from your
              phone’s image libraries.
            </p>
          </div>
        </div>

        <div className="article">
          <h3 className="article-heading"> What We Need From You </h3>
          <p>As a beta tester we ask for this feedback:</p>
          <ol>
            <li>Does the app even work on your device?</li>
            <li>Do the results meet your expectations?</li>
            <li>
              Reaction to the ‘look and feel’ of the app. Colors? Layout? etc.
            </li>
            <li>Did anything surprise you?</li>
            <li>Did the app navigate intuitively?</li>
            <li>Does the content give you good information?</li>
            <li>
              {' '}
              Are we missing some obvious symbols or symbols you’d like to see?{' '}
            </li>
            <li>Were the results in the form that you expected?</li>
            <li>Did the results advance your knowledge of the symbol, art?</li>
            <li>Did the answers in the results make sense?</li>
            <li>
              Did the results help you understand the MEANING of the symbol?
            </li>
            <li>
              Did the photos help you better understand meaning, context, and
              the use of the symbol?
            </li>
            <li>Did the photos add to the experience?</li>
          </ol>
        </div>
      </InstructionalArticle>
    </Layout>
  )
}

const InstructionalArticle = styled.article`
  margin: 3rem auto;
  .list-header {
    margin-top: 2rem;
    text-align: center;
  }
  ol {
    margin: 0.5rem auto;
    margin-left: 2rem;
    li {
      padding-top: 0.5rem;
    }
  }
  .italic {
    font-style: italic;
    margin-top: 1rem;
  }
  .article-heading {
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .step {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.9rem;
    color: var(--black);
  }
  .step-value {
    font-weight: 400;
  }

  .icons {
    margin-top: 0.75rem;
    display: flex;
    figure {
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      figcaption {
        margin-top: 0.5rem;
        line-height: 15px;
      }
    }
    figure:nth-of-type(2) {
      margin-left: 2rem;
    }
  }
  .art-translated-icons {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    min-height: 60px;
    p {
      margin-top: 0;
      margin-left: 1rem;
      padding-top 1rem;
      span.theme-color {
        color: var(--green);
        font-weight: 600;
      }
    }
    .gatsby-image-wrapper.icon {
      min-width: 50px;
      min-height: 50px;
      img {
        object-fit: contain !important;
      }
    }
  }
  & #become-beta-tester-email-block{
    margin: 1rem auto;
    & > a {
      color: var(--white);
      font-weight: 400;
      background: var(--green);
      border-radius: 20px;
      padding: 12px 15.288px;
      text-decoration: none;
      text-align: center;
    }
  }
  .art-translated-icons {
    @media (min-width: 700) {
      flex-direction: row;
    }
  }
`
export default IndexPage
