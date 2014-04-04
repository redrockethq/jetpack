'use strict';

var express = require('express')
  , config = require('./config')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

// setup the application

app.set('port', process.env.PORT || 4020);
app.use(express.static(__dirname + '/app'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

config('development', app);

var port = app.get('port');
server.listen(port);