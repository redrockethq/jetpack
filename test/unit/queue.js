'use strict';

var expect = require('chai').expect;

describe('Queue', function () {

  describe('#items', function () {

    var queue;
    beforeEach(function () {
      queue = setupQueue();
      expect(queue.items.length).to.eql(0);
    });

    it('should have no items', function () {
      var queue = require('../../lib/core/queue');

      expect(queue).to.have.property('items');
      expect(queue.items.length).to.be.at.least(0);
    });

  });

  describe('enqueue', function () {

    var queue;
    beforeEach(function () {
      queue = setupQueue();
      expect(queue.items.length).to.eql(0);
    });

    it('should add an item when the queue is called', function () {

      var examplePayload = { some: 'awesome', data: 'that', should: 'show', up: 'in', the: 'event'};
      queue.enqueue('someEvent', examplePayload);
      expect(queue.items.length).to.eql(1);

      var processedPayload = queue.dequeue();
      expect(processedPayload.payload).to.be.equal(examplePayload);
      expect(queue.items.length).to.eql(0);
    });

  });

  describe('dequeue', function () {
    var queue;
    beforeEach(function () {
      queue = setupQueue();
      expect(queue.items.length).to.eql(0);
    });

    it('should remove the elements in the queue in the proper order', function () {
      populateQueue(queue);
      expect(queue.items.length).to.eql(3);

      for (var i = 0; i < 3; i++) {
        var evt = queue.dequeue();
        expect(evt).to.be.ok;
        expect(evt.payload.favoriteWord).to.equal('blah' + i);
      }

      expect(queue.items.length).to.eql(0);
    });

  });

  describe('clear', function () {

    it('should clear out all the messages', function () {
      var queue = setupQueue();
      queue = populateQueue(queue);
      expect(queue.items.length).to.eql(3);
      queue.clear();
      expect(queue.items).to.be.empty;
    });

  });

  describe('peek', function () {

    var queue;
    beforeEach(function () {
      queue = setupQueue();
      expect(queue.items.length).to.eql(0);
    });

    it('should return the first item without dequeueing it', function () {
      queue = populateQueue(queue);
      expect(queue.items.length).to.eql(3);
      var first = queue.items[0];
      var peeked = queue.peek();
      expect(peeked).to.eql(first);
      expect(queue.items[0]).to.eql(peeked);

    });

    it('should return a null if there is not data and you peek the object', function () {
      queue.clear();
      expect(queue.items.length).to.eql(0);
      var nulled = queue.peek();
      expect(nulled).to.be.null;
    });
  });

  describe('can', function () {
    var queue;
    beforeEach(function () {
      queue = setupQueue();
      expect(queue.items.length).to.eql(0);
    });

    it('isEmpty should be true when the queue has no items', function () {
      expect(queue.isEmpty).to.be.true;
    });

    it('isEmpty should be false when the queue has items', function () {
      populateQueue(queue);
      expect(queue.isEmpty).to.be.false;
    });

  });

});



/**
 * Sets up the Queue
 * @returns {*|exports}
 */
function setupQueue() {
  var queue = require('../../lib/core/queue');
  queue.clear();
  return queue;
}

/**
 * Adds 3 items
 * @param {Object} queue
 * @returns {*}
 */
function populateQueue(queue) {
  queue.clear();
  for (var i = 0; i < 3; i++)
    queue.enqueue('event' + i, {favoriteWord: 'blah' + i});
  return queue;
}

