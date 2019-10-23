module.exports = {
  siteMetadata: {
    title: 'Ross Brandon',
    description: 'Ross Brandon - Software Engineer - Austin, TX',
    github: 'https://github.com/rosstafarian',
    linkedin: 'https://www.linkedin.com/in/ross-brandon',
    email: 'mailto:ross.brandon3@gmail.com',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: 'src/pages/portfolio',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/pages/posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logos',
        path: 'static/images/logos',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['pacifico:400', 'raleway:100,400,600,700', 'lato: 300,400,500'],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ross Brandon Portfolio',
        short_name: 'Ross Brandon',
        start_url: '/',
        background_color: '#292929',
        theme_color: '#405375',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
}
