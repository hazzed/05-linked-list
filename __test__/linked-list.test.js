'use strict';

const LinkedList = require('../model/linked-list')


describe('linked-list-model.js',() => {
    test('A list with a single element, should have a value and no next', () => {
      let result = new LinkedList(100);
      expect(result.value).toEqual(100);
      expect(result.next).toEqual(null);
    });

    test('insertion should properly modify the next property', () => {
        let result = new LinkedList(10);
        result.append(new LinkedList(20));
        result.append(new LinkedList(30));
    
        expect(result.value).toEqual(10);
        expect(result.next.value).toEqual(20);
        expect(result.next.next.value).toEqual(30);
        expect(result.next.next.next).toEqual(null);
      });

});

