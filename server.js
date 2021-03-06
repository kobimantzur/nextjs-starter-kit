const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const LRUCache = require('lru-cache');
const path = require('path');

const Sentry = require('@sentry/node');
if (!dev) {
  Sentry.init({ dsn: 'https://dbbf675d40cc408f94a60528a7e2315b@sentry.io/2468767' });
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max:
    100 * 1024 * 1024 /* cache size will be 100 MB using `return n.length` as length() function */,
  length: function(n, key) {
    return n.length;
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(Sentry.Handlers.requestHandler());
    server.get('/apple-app-site-association', (req, res) => {
      res.setHeader('Content-Type', 'application/pkcs7-mime');

      return res.sendFile(path.join(__dirname, '/apple-app-site-association'));
    });
    server.get('/.well-known/apple-app-site-association', (req, res) => {
      res.setHeader('Content-Type', 'application/pkcs7-mime');

      return res.sendFile(path.join(__dirname, '/apple-app-site-association'));
    });

    server.get('/_next/*', (req, res) => {
      /* serving _next static content using next.js handler */
      handle(req, res);
    });
    server.use(
      '/public',
      express.static(__dirname + '/public', {
        maxAge: '365d'
      })
    );
    server.get('*', (req, res) => {
      if (!dev) {
        /* serving page */
        return renderAndCache(req, res);
      } else {
        return handle(req, res);
      }
    });

    server.get('/sitemap.xml', (req, res) => {
      res.status(301).redirect('/static/sitemap.xml');
    });
    if (!dev) {
      server.use(Sentry.Handlers.errorHandler());
      // Optional fallthrough error handler
      server.use(function onError(err, req, res, next) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support.
        res.statusCode = 500;
        res.end(res.sentry + '\n');
      });
    }

    const port = process.env.PORT || 3000;
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.log(ex);
    process.exit(1);
  });

//   *
//  * NB: make sure to modify this to take into account anything that should trigger
//  * an immediate page change (e.g a locale stored in req.session)
//  */
function getCacheKey(req) {
  console.log(`Cache key: ${req.path}`);
  return `${req.path}`;
}

async function renderAndCache(req, res) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`Serving cached version of ${key}`);
    //console.log(`serving from cache ${key}`);
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    //console.log(`key ${key} not found, rendering`);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, req.path, req.query);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query);
  }
}
