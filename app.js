'use strict';

var express = require('express'),
  config = require('./config'),
  app = express();

// setup the application

app.set('port', process.env.PORT || 4020);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

config('development', app);

console.log(app.routes);

var port = app.get('port');
app.listen(port);