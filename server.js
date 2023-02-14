var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "store.json", 'utf8', function (err, data) {
      console.log( data );
      res.end(data);
   });
})


var PORT = process.env.port || 8081;
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})