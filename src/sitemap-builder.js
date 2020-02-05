require('@babel/register');

const router = require('./routes').default;
const Sitemap = require('../../').default;

new Sitemap(router).build('http://app.avartii.com').save('./sitemap.xml');
