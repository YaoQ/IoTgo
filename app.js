var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
//var sessionStore = require('connect-redis');


var routes = require('./routes/index');

var app = express();

// web app backend
app.use('/admin', favicon(__dirname + '/public/backend/favicon.png'));
app.use('/admin', express.static(__dirname + '/public/backend'));
// web app frontend
app.use(favicon(__dirname + '/public/frontend/favicon.png'));
app.use(express.static(__dirname + '/public/frontend'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
//Setup up session for https

app.set('trust proxy',1);
//app.use(bodyParser());
//app.use(cookieParser());
app.use(session({
        secret: 'Super Secret Password',
        proxy: true,
        resave: true,
        saveUninitialized: true,
        key:'session.sid',
        cookie :{secure: true} //,
//        store : new sessionStore()
}));

// catch 404 and redirect to /
app.use(function(req, res, next) {
  res.redirect('/?path=' + req.path);
});

// error handlers

app.use(function(err, req, res, next) {
  res.status(err.status || 500).end();
});

module.exports = app;
