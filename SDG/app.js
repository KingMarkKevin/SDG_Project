var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tempRouter = require('./routes/temp');
var droughtRouter = require('./routes/drought')
var rainRouter = require('./routes/rain')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/temp', tempRouter);
app.use('/drought', droughtRouter);
app.use('/rain', rainRouter)

module.exports = app;
