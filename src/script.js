var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  //properties...
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sausagerecipes'
});

//tempCont is used so that the server won't crash if too many people use it at the same time.
//https://www.youtube.com/watch?v-hGZX_SA7IYg at 18 minutes for explanation..

connection.connect(function(error) {
  if(!!error) {
    console.log('Error in connection');
  } else {
    console.log("Connection is connected!");
  }
});

app.get('/', function(req, resp){
  connection.query("SELECT * FROM allsausagerecipes", function(error, rows, fields){
    if(!!error) {
      console.log('Error in the query');
    } else {
      console.log('Successful query');
    }
  });
});

app.listen(1337);
