const path = require('path');

module.exports = [
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-nprogress',
        options: {
            color: '#1B9CFC',
            showSpinner: false,
        },
    },
    {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
            fonts: [
                { family: 'Roboto', variants: ['300', '500', '700'], },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Gatsby Demo`,
            short_name: `Gatsby Demo`,
            start_url: `/`,
            background_color: `#f5f6fa`,
            theme_color: `#1B9CFC`,
            display: `standalone`,
            icon: 'src/assets/images/icon.png', // must be PNG 512x512
        },
    },
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            displayName: process.env.NODE_ENV !== 'production',
        },
    },
    {
        resolve: 'gatsby-plugin-page-creator',
        options: {
            path: `${path.join(__dirname, '../src/pages')}`,
            ignore: ['**/styles.js'],
        },
    },
    {
        resolve: 'gatsby-plugin-canonical-urls',
        options: {
            siteUrl: 'https://eduardorotundaro.github.io/gatsby-demo/',
        },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
];
