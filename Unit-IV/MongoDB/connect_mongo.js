var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb4";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected and Database created!");
  db.close();
});

