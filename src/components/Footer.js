import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import DonateBtn from '../components/DonateBtn'

import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <FooterWrapper className={className}>
    <div className="footer-container">
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
    </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  & {
    border-top: 1px solid #33333319;
    padding-top: 1rem;
    margin: 0 auto;
    margin-top: 2rem;

    .footer-container{
      display:flex;
      flex-wrap: wrap;
      align-items: flex-end;
    }

    a.logo {
      display:inline-block;
      margin-top: 0;
      margin-right: 0.8rem;
      margin-bottom: 0.2rem;
      margin-left: 0;
    }
    a.donate-btn {
      display: inline-block;

      margin-top: 1rem;
      margin-right: 0.8rem;
      margin-bottom: 0.2rem;
      margin-left: 0;
    }
  }
`

export default Footer
