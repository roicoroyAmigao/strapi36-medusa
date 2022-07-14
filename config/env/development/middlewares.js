module.exports = [
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        enabled: true,
        // origin: ['http://localhost:8100','http://localhost:1337'],
        origin: ['*'],
        headers: ['*'],
      }
    },,
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
  