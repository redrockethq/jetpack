'use strict';

var _ = require('lodash')
  , Errors = require('../common/errors')
  , ValidationError = Errors.ValidationError
  , ValidationErrors = Errors.ValidationErrors;

/**
 * Event Model
 * @param {Object} payload
 * @param name
 * @constructor
 */
function Event(name, payload) {
  payload = payload || {};

  this.name = name;
  this.payload = payload.payload;

  var errors = [];
  if (!this.name || this.name.length == 0) {
    errors.push(new ValidationError('name', 'Event name is required'));
  }

  if (errors.length > 0)
    throw new ValidationErrors(errors);
}

module.export = Event;