const mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',   // url of database
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'testdb'
});

connection.connect();

module.exports = connection;
