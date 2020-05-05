var express = require('express');
var servers = require('./server');
var quiz= require('./quiz_functions');
var question_data= require('./question_dataset');

var app = express();

app.use('/servers', servers);
//app.use('/quiz', quiz);
//app.use('/question_data', question_data);



app.listen(3000, function() {
  console.log("Listening on port 3000!")
});

module.exports = app;
