var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
  var myobj = [
    { name: 'DL', type: 'SE', code:'631'},
    { name: 'ML', type: 'PE', code:'511'},
    { name: 'ADSA', type: 'PC', code:'311'},
    { name: 'CP', type: 'PC', code:'111'},
    { name: 'OCW', type: 'PE', code:'221'},
    { name: 'DBMS', type: 'PC', code:'312'},
    { name: 'EMTL', type: 'PE', code:'521'},
    { name: 'ADA', type: 'SE', code:'641'},
    { name: 'DIP', type: 'IE', code:'551'},
    { name: 'DM', type: 'PE', code:'512'}
  ];
  dbo.collection("courses").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

});