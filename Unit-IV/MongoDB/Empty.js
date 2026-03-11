var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 'cs531', name: 'Deep Learning'} ,
    { _id: 'cs411', name: 'Machine Learning'},
    { _id: 'cs511', name: 'DBMS'}
  ];
  dbo.collection("subjects").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
