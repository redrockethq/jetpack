'use strict';

var Router = require('./router');

module.exports = function (env, app) {
  env = env || 'development';
  var router = new Router(app);
};