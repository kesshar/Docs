var mysql = require('mysql2');
var readline = require('readline');

// Create connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "mydb"
});

// Create readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Ask user for name
  rl.question("Enter faculty name: ", function(name) {

    // Ask user for address
    rl.question("Enter faculty address: ", function(address) {

      // Use parameterized query
      var sql = "INSERT INTO Employee (name, address) VALUES (?, ?)";
      
      con.query(sql, [name, address], function(err, result) {
        if (err) throw err;
        console.log("1 record inserted successfully!");
        
        rl.close();
        con.end();
      });

    });

  });
});