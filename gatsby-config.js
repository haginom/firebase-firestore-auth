require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, 
})

module.exports = {
  siteMetadata: {
    title: `simple-auth`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },]
};