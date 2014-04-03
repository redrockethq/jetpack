'use strict';

var _items = [];
Object.defineProperties(InMemoryQueue, {
  items: {
    enumerable: false,
    configurable: false,
    value: _items
  }
});

/**
 * Creates a new InMemoryQueue
 * @constructor
 */
function InMemoryQueue() { }

Object.defineProperties(Object.prototype, {
  clear: {

    /**
     * Clears out all the items in the queue
     */
    value: function () {
      InMemoryQueue.items = [];
    },
    enumerable: true,
    configurable: false
  }
});

module.exports = InMemoryQueue;