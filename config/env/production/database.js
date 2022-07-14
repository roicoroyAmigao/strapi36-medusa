const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        /* FOR POSTGRES */
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'ricardobento'),
        password: env('DATABASE_PASSWORD', '0000'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});