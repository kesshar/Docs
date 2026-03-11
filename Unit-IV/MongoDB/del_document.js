var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb4");
  var myquery = { name: 'Harish' };
  dbo.collection("students").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.deletedCount+ " document(s) deleted");
    
    db.close();
  });
});
