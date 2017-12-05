'use strict';

const LinkedList = require('../model/linked-list')


describe('linked-list-model.js',() => {
    test('A list with a single element, should have a value and no next', () => {
      let result = new LinkedList(100);
      expect(result.value).toEqual(100);
      expect(result.next).toEqual(null);
    });
});