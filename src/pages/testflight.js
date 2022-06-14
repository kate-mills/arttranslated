/* eslint-disable jsx-a11y/anchor-is-valid */

// Simply go to your app's TestFlight page, click an existing group, and click Enable Public Link. You can then copy the link and share it on social media, messaging platforms, email campaigns, and more.

import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

import styled from 'styled-components'

const IndexPage = ({ className }) => {
  return (
    <Layout hideFooter={true}>
      <Seo title={`Art Translated Mobile App Beta Testing`} />

      <InstructionalWrapper className={className}>
        <h1>Become An Art Translated Beta Tester</h1>
        <p className="text">
          Thank you for your interest in beta testing our fun new
          application!!!!
        </p>
        <h2 className="instructions">How To Become A Beta Tester</h2>
        <div className="icon">
          <StaticImage
            src={'../images/testflight.png'}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="body">
          <h3 className="list-header">
            Download the TestFlight App And Start Testing
          </h3>
          <p className="italic"></p>
          <ol>
            <li>
              Send an email to:{' '}
              <a href="mailto:info.arttranslated@gmail.com?subject=I want to be a beta tester!&body=All we need is your name and email below">
                info.arttranslated@gmail.com
              </a>{' '}
              telling us the email address and name you want us to use.
            </li>
            <li>Download Apple’s TestFlight in Apple’s App Store. TestFlight is Apple’s testing app and will be how we deliver the app(s) and updates.</li>
            <li> We will then send you an invite to your email address.  Please download the app(s) within 48 	hours or the invitation lapses.</li>

            <li>
              The app will appear on your phone's springboard (marked with an
              orange bullet), and also in the TestFlight app.
            </li>
          </ol>
        </div>
        <div className="body">
          <p className="italic">
            *Once started, a test session lasts 85 days. After that period it's
            no longer possible to test the app, unless you request a new
            session.
          </p>
        </div>

      </InstructionalWrapper>
    </Layout>
  )
}

const InstructionalWrapper = styled.div`
  margin: 3rem auto;
  div {
    margin: 0 auto;
  }
  .list-header {
    margin-top: 2rem;
    text-align: center;
  }
  ol {
    margin: 1rem auto;
    margin-left: 2rem;
  }
  .icon {
    text-align: center;
  }
  .italic {
    font-style: italic;
    margin-top: 1rem;
  }

  .instructions {
    color: var(--green);
    font-size: 21px;
    font-weight: 400;
    text-align: center;
    line-height: 30px;
    padding-top: 20px;
    padding-bottom: 0px;
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
`

export default IndexPage
