import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import DonateBtn from '../components/DonateBtn'

import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <FooterWrapper className={className}>
      <hr />

      <Link to="/" className="logo">
        <StaticImage
          src="../images/logo.png"
          alt=""
          height={40}
          placeholder="blurred"
        />
      </Link>
      <DonateBtn
        txt="Give"
        href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/"
        className="donate-btn"
      />
      <DonateBtn
        txt="Google Pay"
        href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/"
        className="donate-btn"
      />
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  & {
    margin-top: 2rem;

    a.logo {
      margin-top: 0;
      margin-right: 0.8rem;
      margin-bottom: 0.2rem;
      margin-left: 0;
    }
    a.donate-btn {
      display: inline-block;
      margin-top: 0.2rem;
      margin-right: 0.8rem;
      margin-bottom: 0.2rem;
      margin-left: 0;
    }
  }
`

export default Footer
