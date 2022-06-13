import React from 'react'
import BetaBtn from '../components/BetaBtn'

import styled from 'styled-components'

const Footer = ({ className }) => {
  return (
    <FooterWrapper className={className} id="footer">
    <BetaBtn/>
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
