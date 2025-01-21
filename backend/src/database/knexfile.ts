import { Knex } from 'knex';
import path from 'path'
require('dotenv').config({path: path.resolve(__dirname, '..','..','.env')})

export const DB_NAME = process.env.DB_NAME || ""
export const DB_HOST = process.env.DB_HOST || ""
export const DB_USER = process.env.DB_USER || ""
export const DB_PASSWORD = process.env.DB_PASSWORD || ""
export const DB_PORT = parseInt(process.env.DB_PORT|| '')

const config: Knex.Config = {
  client: 'pg',
  connection: {
    database: DB_NAME,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    ssl: {
      rejectUnauthorized: false, 
    },
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
  },
};

export default config;
