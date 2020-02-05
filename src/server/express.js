import express from 'express';
import serveStatic from 'serve-static';
import mime from 'mime-types';
import next from 'next';
import initRoutes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

app.prepare().then(() => {
  const server = express();
  if (dev) {
    const webpack = require('webpack');
    const config = require('../../config/webpack.dev.js');
    const compiler = webpack(config);

    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

    const webpackHotMiddlware = require('webpack-hot-middleware')(compiler, config.devServer);
    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddlware);
  }

  server.use(
    serveStatic('dist', {
      maxAge: '1y',
      setHeaders(res, path) {
        if (mime.lookup(path) === 'text/html') {
          res.setHeader('Cache-Control', 'public, max-age=0');
        }
      },
    }),
  );

  const PORT = process.env.PORT || 4000;

  initRoutes(server);

  server.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
