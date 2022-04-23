import React from 'react'
import styled from 'styled-components'

const DonateBtn = ({
  txt = 'PayPal',
  href = 'https://www.google.com',
  className,
}) => {
  return (
    <DonateButtonWrapper href={href} className={className}>
      Donate with {txt}
    </DonateButtonWrapper>
  )
}

const DonateButtonWrapper = styled.a`
  & {
    color: white;
    background: #055c6e;
    border-radius: 20px;
    padding: 10px 12.74px;
    text-decoration: none;
    text-align: center;
    margin: 1rem 1rem 1.34rem;
  }
`

export default DonateBtn
