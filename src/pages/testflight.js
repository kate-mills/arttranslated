/* eslint-disable jsx-a11y/anchor-is-valid */

// Simply go to your app's TestFlight page, click an existing group, and click Enable Public Link. You can then copy the link and share it on social media, messaging platforms, email campaigns, and more.

import React from 'react'
import Layout from '../components/Layout'
//import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

import styled from 'styled-components'

const IndexPage = ({ className }) => {
  return (
    <Layout>
      <Seo title={`Art Translated Mobile App Beta Testing`} />
      <InstructionalWrapper className={className}>
          <h2 className="instructions">Art Translated Mobile App Beta Testing</h2>
          <div className="icon">
            <StaticImage
              src={'../images/testflight.png'}
              alt=""
              width={100}
              height={100}
            />
          </div>
    <div className="body">
        <h3 className="list-header">Download the TestFlight App And Start Testing</h3>
    <p className="italic">Invited testers will receive an email with a link to test one or both of our apps.</p>
        <ol>
          <li>To be able to test, you will first have to download the TestFlight app to your mobile device.</li>
          <li>After accepting the invitation, you will be directed to the TestFlight app and you will be prompted to install the app to be tested.</li>
          <li>The app will appear on your phone's springboard (marked with an orange bullet), and also in the TestFlight app.</li>
        </ol>
    </div>
    <div className="body">
        <p className="italic">
          *Once started, a test session lasts 85 days. After that period it's no longer possible to test the app, unless you request a new session.
        </p>
    </div>
      </InstructionalWrapper>
    </Layout>
  )
}

const InstructionalWrapper = styled.div`
  margin: 3rem auto;
  div{
    margin: 0 auto;
  }
  .list-header{
    margin-top: 2rem;
    text-align: center;
  }
  ol{
    margin:1rem auto;
    margin-left: 2rem;
  }
  .icon{
    text-align: center;
  }
  .italic{
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
