var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "root123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
