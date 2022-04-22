import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import DonateBtn from '../components/DonateBtn'

const Footer = () => {
  return (
    <footer className="">
      <hr />

      <div className="footer-links">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt=""
            height={40}
            placeholder="blurred"
          />
        </Link>

        <div className="flex-btns">
          <DonateBtn txt="Give" href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/" />
          <DonateBtn txt="Google Pay" href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
