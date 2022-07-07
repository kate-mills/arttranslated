import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'



const query = graphql`
  {
    file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          height: 117 
        )
      }
    }
  }
`

const Navbar = ({ className }) => {
  const { file: { childImageSharp: { gatsbyImageData: logo }, }, } = useStaticQuery(query)

  return (
    <NavbarWrapper className={className}>
        <div className="navbar-container">
          <Link to="/" className="navbar-icon" title="Go To Art Translated Homepage">
            <GatsbyImage image={getImage(logo)} alt="Art Translated - Understand the Language of Art logo" placeholder="blurred" role="presentation" title="Art Translated - Understand the Language of Art"/>
          </Link>
        </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  & {
    .navbar-icon{
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }
`
export default Navbar
