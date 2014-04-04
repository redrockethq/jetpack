'use strict';

var Event = require('../models').Event
  , queue = require('./common/queue')
  , Errors = require('../common/errors')
  , ValidationErrors = Errors.ValidationErrors;

exports.post = function (req, res, next) {
  try {
    var event = new Event(req.params);

  } catch (err) {
    if (err instanceof ValidationErrors) {
      res.send(400, { message: err.message, errors: err.errors });
    }
  }


  res.send(200, {message: 'hello'});
};

exports.get = function (req, res, next) {
  res.send(200, {name: req.params.name});
};