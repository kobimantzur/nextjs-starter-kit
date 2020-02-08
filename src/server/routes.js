const fs = require('fs');
const MixPanel = require('mixpanel');

const path = require('path');
const axios = require('axios');

const mixpanel = MixPanel.init('f87910ae4849de1b774bc3d092a0cf9d');
module.exports = server => {
  server.get('/.well-known/apple-app-site-association', (req, res) => {
    res.setHeader('Content-Type', 'application/pkcs7-mime');

    return res.sendFile(path.join(__dirname, '../../dist/apple-app-site-association'));
  });

  server.get('/apple-app-site-association', (req, res) => {
    res.setHeader('Content-Type', 'application/pkcs7-mime');

    return res.sendFile(path.join(__dirname, '../../dist/apple-app-site-association'));
  });

  server.get('/business/:friendlyUrl', (req, res) => {
    const friendlyUrl = req.params.friendlyUrl || '';

    axios
      .get(
        `https://api.mymapo.com/api/businesses/getByFriendlyUrl?friendlyUrl=${encodeURI(
          friendlyUrl
        )}`
      )
      .then(response => {
        if (!response.data) return res.redirect(301, 'https://www.mymapo.com');

        const title = `${response.data.subCategories[0].title} ב${response.data.placements[0].heName} - ${response.data.englishName}`;

        // htmlResponse = htmlResponse.replace(/\{{title}}/g, response.data.englishName);
        fs.readFile(path.join(__dirname, '../../dist/index.html'), 'utf8', (err, htmlData) => {
          let resultHtml = htmlData.replace(/\{{og_title}}/g, `'${title}'`);
          resultHtml = resultHtml.replace(
            '</head>',
            `
          <script type='text/javascript'>var business=${JSON.stringify(
            response.data
          )};</script></head>
          `
          );
          resultHtml = resultHtml.replace(/\{{title}}/g, `${title}`);
          resultHtml = resultHtml.replace(/\{{og_description}}/g, `'${response.data.description}'`);
          resultHtml = resultHtml.replace(/\{{description}}/g, `'${response.data.description}'`);
          resultHtml = resultHtml.replace(
            /\{{og_image}}/g,
            `'${
              response.data.logoUrl
                ? response.data.logoUrl
                : 'https://res.cloudinary.com/avartii/image/upload/v1542131557/social/mapo-logo.png'
            }'`
          );
          resultHtml = resultHtml.replace(
            /\{{og_url}}/g,
            `'https://www.mymapo.com/business/${friendlyUrl}'`
          );

          return res.send(resultHtml);
        });
      })
      .catch(e => {
        console.log(e);
        console.log('ERROR');
        const metaTitle = 'Mapo | מטיילים ישראלים בחו״ל';
        const description = 'מטיילים ישראלים בחו״ל';

        fs.readFile(path.join(__dirname, '../../dist/index.html'), 'utf8', (err, htmlData) => {
          htmlData = htmlData.replace(/\{{og_title}}/g, `${metaTitle}`);
          htmlData = htmlData.replace(/\{{title}}/g, `${metaTitle}`);
          htmlData = htmlData.replace(/\{{og_description}}/g, `'${description}'`);
          htmlData = htmlData.replace(/\{{description}}/g, `'${description}'`);
          htmlData = htmlData.replace(
            /\{{og_image}}/g,
            'https://res.cloudinary.com/avartii/image/upload/v1542131557/social/mapo-logo.png'
          );
          htmlData = htmlData.replace(/\{{og_url}}/g, 'https://app.mymapo.com/download');

          return res.send(htmlData);
        });
      });
  });
  if (process.env.NODE_ENV === 'production') {
    server.get('*', (req, res) => {
      const metaTitle = 'Mapo | מטיילים ישראלים בחו״ל';
      const description = 'מטיילים ישראלים בחו״ל';

      fs.readFile(path.join(__dirname, '../../dist/index.html'), 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(/\{{og_title}}/g, `'${metaTitle}'`);
        htmlData = htmlData.replace(/\{{title}}/g, `'${metaTitle}'`);
        htmlData = htmlData.replace(/\{{og_description}}/g, `'${description}'`);
        htmlData = htmlData.replace(/\{{description}}/g, `'${description}'`);
        htmlData = htmlData.replace(
          /\{{og_image}}/g,
          'https://res.cloudinary.com/avartii/image/upload/v1542131557/social/mapo-logo.png'
        );
        htmlData = htmlData.replace(/\{{og_url}}/g, 'https://app.mymapo.com/download');

        return res.send(htmlData);
      });
    });
  }
};
