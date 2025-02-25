const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 }
];

const stream = new SitemapStream({ hostname: 'http://localhost:3000/' });

streamToPromise(stream).then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
});

links.forEach((link) => stream.write(link));
stream.end();
