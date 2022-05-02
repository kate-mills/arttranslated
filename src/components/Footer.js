import React from 'react'
import DonateBtn from '../components/DonateBtn'

import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <FooterWrapper className={className} id="footer">
      <DonateBtn txt="Give" href="#" className="donate-btn" />
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
`

export default Footer
