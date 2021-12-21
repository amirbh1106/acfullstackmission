const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'amir2939',
    host: 'localhost',
    database: 'todobase',
    port: 5432,
  })


  module.exports = { pool };
