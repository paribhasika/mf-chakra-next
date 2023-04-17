const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,

  experimental: {
    esmExternals: false
  },
  compiler:{
    styledComponents: true
  },
  webpack(config,options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            products:`products@http://localhost:3001/_next/static/${options.isServer?'ssr':'chunks'}/remoteEntry.js`,
            },
          exposes: {},
          shared: {
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
