import React from 'react'
import {Link} from 'gatsby'

const AnchorArrow = ({goTo, text="", className}) => {
  return (
    <Link to={goTo || '/'} className={className|| ''} style={{fontWeight: 600}}>
    {`${text} `}<svg
      width="5"
      height="7"
      viewBox="0 0 5 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6.1775L3.09042 3.5L0 0.8225L0.951417 0L5 3.5L0.951417 7L0 6.1775Z"
        fill="#055C6E"
      />
    </svg>
    </Link>
  )
}

export default AnchorArrow
