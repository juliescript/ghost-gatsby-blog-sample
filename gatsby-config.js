/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://api.juliescript.dev`,
          contentApiKey: `01cdae7db7878bae65f9a0e0a8`,
          version: `v3` // Ghost API version, optional, defaults to "v3".
                        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
   }
  ],
}
