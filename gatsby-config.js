require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        description: `Understand the Language of Art. Welcome to a new world. Try our new mobile apps leveraging new technologies and mobile capabilities.`,
        lang: `en`,
        name: `Art Translated Mobile Apps`,
        short_name: `Art Translated`,
        start_url: `/`,
        id: `/`,
        background_color: `#ffffff`,
        theme_color: `#055c6e`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
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
  ],
}
