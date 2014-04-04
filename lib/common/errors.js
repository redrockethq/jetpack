'use strict';

var util = require('util'),
  _ = require('lodash');

exports = module.exports;

/**
 * JetPack basic message
 *
 * @param msg
 * @constructor
 */
function JetpackError(msg) {
  JetpackError.super_.call(this);
  this.message = msg;
  this.name = 'JetpackError';
  this.statusCode = 500;
}
util.inherits(JetpackError, Error);

/**
 * Validation Error
 *
 * @param {String} name - the name of the parameter
 * @param {String} [message] - the message that should be displayed to users
 * @constructor
 */
function ValidationError(name, message) {
  this.name = name;
  this.message = message;
}

Object.defineProperties(ValidationError.prototype, {
  value: { enumerable: true, configurable: true, writable: true}
});

/**
 * Validation Errors
 *
 * @param {Array<ValidationError>} errors
 * @constructor
 */
function ValidationErrors(errors) {
  errors = errors || [];
  ValidationErrors.super_.call(this, 'A validation error has occurred');
  this.statusCode = 400;
  if (!_.isArray(errors)) {
    this.errors = [errors];
  } else {
    this.errors = errors;
  }
}
util.inherits(ValidationErrors, JetpackError);

exports.JetpackError = JetpackError;
exports.ValidationError = ValidationError;
exports.ValidationErrors = ValidationErrors;