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
      resolve: `gatsby-plugin-manifest`,
      options: {
        description: `Understand the Language of Art. Welcome to a new world. Try our new mobile apps leveraging new technologies and mobile capabilities.`,
        lang: `en`,
        name: `Art Translated Mobile Apps`,
        short_name: `Art Translated`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#055c6e`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-next-seo',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-226103965-1",

        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,

        // Setting this parameter is optional
        anonymize: false,

        // Setting this parameter is also optional
        respectDNT: false,
        
        // Avoids sending pageview hits from custom paths
            //exclude: ["/preview/**", "/do-not-track/me/too/"],
        
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        // Enables Google Optimize using your container Id
            //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        
        // Enables Google Optimize Experiment ID
            //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        
        // Set Variation ID. 0 for original 1,2,3....
            //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        
        // Defers execution of google analytics script after page load
        defer: false,

        // Any additional optional fields
            //sampleRate: 5,
            //siteSpeedSampleRate: 10,
            //cookieDomain: "example.com",
        
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
}
