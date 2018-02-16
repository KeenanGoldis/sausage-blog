var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  //properties...
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sausageRecipes'
});

connect.connect(function(error){
  //callback function
  if(!!error){
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

app.get('/', function (req, resp){
  //  mysql example below
  connection.query("SELECT * FROM sausageRecipes", function(error,rows, fields)
  //callback function
  if(!!error) {
    console.log('Error in the query');
  } else {
    console.log('Successful query');
  }
})

app.listen(1337);
