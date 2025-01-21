import { DB_NAME,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
} from './src/index.ts'


module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
