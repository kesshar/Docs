const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL Connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Route to display form
app.get('/', (req, res) => {
  res.send(`
    <h2>Student Form</h2>
    <form method="POST" action="/add">
      Name: <input type="text" name="name" required><br><br>
      Address: <input type="text" name="address" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to insert data
app.post('/add', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;

  const sql = "INSERT INTO Employee (name, address) VALUES (?, ?)";

  con.query(sql, [name, address], function(err, result) {
    if (err) throw err;
    res.send("1 Record Inserted Successfully!");
  });
});

// Route to fetch students
app.get('/students', function(req, res) {

  con.query(
    "SELECT * FROM Employee WHERE address IS NOT NULL",
    function (err, result) {
      if (err) throw err;

      // Send result to browser
      res.send(result);
    }
  );

});

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});