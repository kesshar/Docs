var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
var query={name:{$regex:/A/i}};
  dbo.collection("students").find(query).sort({name:1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb1");
  var query = { name: /^A/ };;
  dbo.collection("students").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/