import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
//import SchemaOrg from './SchemaOrg'
import { LogoJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';



const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        baseUrl
        defaultImage:image
        twitterUsername
        dateModified
      }
    }
  }
`

const Seo = ({ title, description, image, snippet, noindex }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    baseUrl,
    defaultImage,
    twitterUsername,
    dateModified,
  } = site.siteMetadata


  let defaultSeoImage = `${baseUrl}${defaultImage}`


  const seo = {
    title: title || defaultTitle,
    dateModified,
    description:description || defaultDescription,
    image:`${image || defaultSeoImage}`,
    url:`${baseUrl}${pathname}`,
  }

  return (
    <React.Fragment>
    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {noindex && <meta name="robots" content="noindex" />}
      {snippet && <script type="application/ld+json">{snippet}</script>}

      {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
      {seo.image && <meta property="og:image" content={seo.image} />}
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />


      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
   <GatsbySeo
      openGraph={{
        type: 'website',
        url: seo.url,
        title: seo.title,
        description: seo.description,
        images: [
          {
            url: seo.image,
            width: 1175,
            height: 660,
            alt: '',
          },
        ],
      }}
    />
    <LogoJsonLd logo={seo.image} url={seo.url} />
    </React.Fragment>

  )
}


Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  snippet: PropTypes.string,
}

Seo.defaultProps = {
  title: '',
  description:'',
  image: ``,
  snippet: '',
  noindex: false,
  lang: `en`,
  meta: [],
}

export default Seo
