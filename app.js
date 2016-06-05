var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var port = process.env.PORT||3000;
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//express setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use('/',routes);

app.listen(port);
console.log('Server listening at '+port);