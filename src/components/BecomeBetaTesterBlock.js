import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const BecomeBetaTesterBlock  = ({ className }) => {
  return (
    <div  className={className}>
      <Link to="/become-beta-tester" title="Become Beta Tester">
        Become Beta Tester
      </Link>
    </div>
  )
}

export default styled(BecomeBetaTesterBlock)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2.5rem auto 1.34rem;

  & > a {
    color: var(--white);
    font-weight: 400;
    background: var(--green);
    border-radius: 20px;
    padding: 12px 15.288px;
    text-decoration: none;
    text-align: center;
  }
`
/*export default BecomeBetaTesterLink*/
