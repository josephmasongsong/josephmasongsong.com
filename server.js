const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:slug', (req, res) => {
      const nextJSPage = '/page';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, nextJSPage, queryParams);
    })

    server.get('*', (req, res) => handle(req, res));

    server.listen(8080, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:8080 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
