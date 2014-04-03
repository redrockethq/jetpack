'use strict';

var controllers = require('../lib/apis/controllers');

function Router(app) {

  app.get('/v1/events/:name', controllers.events.get);
  app.post('/v1/events', controllers.events.post);

}

module.exports = Router;
