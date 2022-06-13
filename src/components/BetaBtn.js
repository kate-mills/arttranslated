import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const BetaBtn = ({
  className,
}) => {
  return (
    <BetaButtonWrapper to="/testflight" className={className}>
      Become Beta Tester
    </BetaButtonWrapper>
  )
}

const BetaButtonWrapper = styled(Link)`
  & {
    color: #7b4a00;
    font-weight: 400;
    background: #ff9900;
    border-radius: 20px;
    padding: 12px 15.288px;
    text-decoration: none;
    text-align: center;
    margin: 1rem 1rem 1.34rem;
  }
`

export default BetaBtn
