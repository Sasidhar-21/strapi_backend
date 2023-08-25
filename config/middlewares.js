module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
];


/*module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000'], // Add your Next.js app's URL here
    },
  },
});
  

module.exports = ({ env }) => ({
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000'], // Add your Next.js app's URL here
    },
  },
});
*/
