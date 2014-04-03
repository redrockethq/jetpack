'use strict';

var _ = require('lodash'),
  InMemoryQueue = require('./providers/memory');

/**
 * Manages the queue, the default provider will be an InMemory
 * @param [provider] the default will be InMemory
 * @constructor
 */
function QueueManager(provider) {
  provider = provider || new InMemoryQueue();
  this.provider = provider;
}

Object.defineProperties(QueueManager.prototype, {

  all: {
    enumerable: true,
    configurable: false,
    /**
     * All items
     * @returns {Array}
     */
    get: function () {
      var self = this;
      return self.provider.items;
    }
  },

  enqueue: {
    /**
     * Adds an object to the end of the Queue
     * @param {String} name - the event's name
     * @param {Any} [payload] - the event's data
     */
    value: function (name, payload) {

    },
    enumerable: true,
    configurable: false
  },

  dequeue: {
    value: function () {
      var self = this;

    },
    enumerable: true,
    configurable: false
  },

  clear: {
    /**
     * Removes all objects from the Queue
     */
    value: function () {
      var self = this;
      self.provider.clear();
    },
    enumerable: true,
    configurable: false
  },

  peek: {
    /**
     * Returns the object at the beginning of the Queue without removing it.
     *
     * @returns {Object}
     */
    value: function () {
      var self = this;
      if (self.provider.items.length == 0) {
        return null;
      } else {
        return _.first(self.provider.items);
      }
    },
    enumerable: true,
    configurable: false
  }

});

module.exports = new QueueManager();
