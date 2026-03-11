const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql'
});

connection.query('SHOW DATABASES', (err, results) => {
  if (err) throw err;
  console.log(results);
});