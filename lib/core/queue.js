'use strict';

var _ = require('lodash');

/**
 * Abstraction around the queue
 *
 * @constructor
 */
function Queue() {
  this.items = [];
}

Object.defineProperties(Queue.prototype, {

  all: {
    enumerable: true,
    configurable: false,
    /**
     * All items
     * @returns {Array}
     */
    get: function () {
      var self = this;
      return self.items;
    }
  },

  enqueue: {
    /**
     * Adds an object to the end of the Queue
     * @param {String} name - the event's name
     * @param {Any} [payload] - the event's data
     */
    value: function (name, payload) {
      this.items.push({name: name, payload: payload});
    },
    enumerable: true,
    configurable: false
  },

  dequeue: {
    /**
     * Removes and returns the object at the beginning of the Queue
     */
    value: function () {
      var self = this;
      var payload = self.items.shift();
      return payload;
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
      self.items = [];
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
      if (self.items.length == 0) {
        return null;
      } else {
        return _.first(self.items);
      }
    },
    enumerable: true,
    configurable: false
  },

  isEmpty: {
    /**
     * Helper to determine if there are any items in the queue
     *
     * @returns {boolean}
     */
    get: function () {
      return this.items.length == 0;
    }
  }

});

module.exports = new Queue();