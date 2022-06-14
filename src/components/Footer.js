import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <FooterWrapper>
      <Link to="/testflight">
        Become Beta Tester
      </Link>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem auto 1.34rem;

  & > a {
    color: #7b4a00;
    font-weight: 400;
    background: #ff9900;
    border-radius: 20px;
    padding: 12px 15.288px;
    text-decoration: none;
    text-align: center;
  }
`
export default Footer
