'use strict';

var util = require('util'),
  _ = require('lodash');

exports = module.exports;

function JetpackError(msg) {
  JetpackError.super_.call(this);
  this.message = msg;
  this.name = 'JetpackError';
  this.statusCode = 500;
}
util.inherits(JetpackError, Error);

function ValidationError(name, message) {
  this.name = name;
  this.message = message;
}

Object.defineProperties(ValidationError.prototype, {
  value: { enumerable: true, configurable: true, writable: true}
});

function ValidationErrors(msg, errors) {
  ValidationErrors.super_.call(this, msg);
  if (errors) {
    if (!_.isArray(errors)) {
      this.errors = [errors];
    } else {
      this.errors = errors;
    }
  }
}
util.inherits(ValidationErrors, JetpackError);

exports.JetpackError = JetpackError;
exports.ValidationError = ValidationError;
exports.ValidationErrors = ValidationErrors;