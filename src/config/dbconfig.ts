import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const {
  DB_HOST: host = 'localhost',
  DB_USER: user = 'root',
  DB_PASSWORD: password = '',
  DB_DATABASE: database
} = process.env;

const pool = mysql.createPool({
  host,
  user,
  password,
  database
});

export default pool;
