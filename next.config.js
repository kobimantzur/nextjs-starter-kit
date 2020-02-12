const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(
  withSass({
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      });
      if (!isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }
      return config;
    }
  })
);
