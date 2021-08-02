module.exports = {
  siteMetadata: {
    siteUrl: "https://www.amblemedia.com",
    title: "",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "JCd1d2pebqJXcgea7agqJ6ovQ3GRNcxIWVNRdmPsaC8",
        spaceId: "eix8xc71tvb7",
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "280502681",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
      options: {
        name: "books",
        path: `${__dirname}/src/books`,
      },
      __key: "images",
    },
  ],
};
