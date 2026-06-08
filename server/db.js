const { Pool } = require('pg');

const pool = new Pool({
  host: 'postgres',
  user: 'mkjs',
  password: 'mkjs123',
  database: 'mkjsdb',
  port: 5432
});

module.exports = pool;