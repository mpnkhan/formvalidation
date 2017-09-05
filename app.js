var express = require('express')
var app = express();

var http = require('http'); 
var https = require('https');
var http_port = 80
app.use('/', express.static(__dirname));

var server = http.createServer(app);
app.listen(http_port);					
console.log('Express started on port ', http_port);
