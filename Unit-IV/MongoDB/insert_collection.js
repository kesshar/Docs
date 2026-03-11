var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb4");
  var myobj = [
    { name: 'Arun', address: 'Bangalore', rollno:'22101', branch:'CSE'},
    { name: 'Anand', address: 'Chennai',rollno:'22102', branch:'CSE'},
    { name: 'Arvnind', address: 'Tirupati',rollno:'22201', branch:'ECE'},
    { name: 'Harish', address: 'Mumbai',rollno:'22202', branch:'ECE'},
    { name: 'Michael', address: 'Delhi',rollno:'22103', branch:'CSE'},
    { name: 'Santosh', address: 'Delhi',rollno:'22104', branch:'CSE'},
    { name: 'Betty', address: 'Vizag',rollno:'22203', branch:'ECE'},
    { name: 'Rishabh', address: 'Kurnool',rollno:'22105', branch:'CSE'},
    { name: 'Sumanth', address: 'Nellore',rollno:'22106', branch:'CSE'},
    { name: 'Vikas', address: 'Surat',rollno:'22107', branch:'CSE'},
    { name: 'Balaji', address: 'Jaipur',rollno:'22204', branch:'ECE'},
    { name: 'William', address: 'Ajmer',rollno:'22205', branch:'ECE'},
    { name: 'Chuck', address: 'Mandi',rollno:'22206', branch:'ECE'},
    { name: 'Vishnu', address: 'Kolkata',rollno:'22207', branch:'ECE'}
  ];
  dbo.collection("students").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

});
