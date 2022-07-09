require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Art Translated Mobile Apps`,
    description: `Understand the Language of Art. Welcome to a new world. Try our new mobile apps leveraging new technologies and mobile capabilities.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Mark Evans`,
    twitterUsername: `katie_napa`,
    baseUrl: `https://arttranslated.netlify.app/`,
    siteUrl: `https://arttranslated.netlify.app/`,
    image: `/seoimage.jpg`,
    defaultImage: `https://arttranslated.netlify.app/seoimage.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-226103965-1",
        head: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        description: `Understand the Language of Art. Welcome to a new world. Try our new mobile apps leveraging new technologies and mobile capabilities.`,
        lang: `en`,
        name: `Art Translated Mobile Apps`,
        short_name: `ArtTranslated`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#055c6e`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: `any maskable`,
      },
    },
    'gatsby-plugin-next-seo',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-no-index`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
