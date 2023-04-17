const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  compiler:{
    styledComponents: true
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'products',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './pdp': './src/pages/pdp/[...slug]'
            },
            shared:{
              '@emotion/': {
                eager: true,
                requiredVersion: false,
                singleton: true,
              },
                '@emotion/core': {
                  singleton: true,
                },
                '@emotion/styled': {
                  singleton: true,
                },
              '@chakra-ui/': {
                eager: true,
                requiredVersion: false,
                singleton: true,
              },
              '@chakra-ui/react':{
                singleton: true,

              }
            }
      })
    );

    return config;
  },
};
