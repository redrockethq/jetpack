'use strict';

var errors = require('../../core/errors');

exports.post = function (req, res, next) {
  res.send(200, {message: 'hello'});
};

exports.get = function (req, res, next) {
  if (!req.params.name || req.params.name.length == 0) {
    res.send()
  }
  res.send(200, {name: req.params.name});
};