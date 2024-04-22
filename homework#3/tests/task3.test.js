const { createCounter, repeatFunction } = require('../task3');
const {describe, test, expect} = require("@jest/globals");

describe('createCounter', () => {
    test('should return a function that increments count on each call', () => {
        const counter1 = createCounter();
        expect(counter1()).toBe(1);
        expect(counter1()).toBe(2);

        const counter2 = createCounter();
        expect(counter2()).toBe(1);
        expect(counter1()).toBe(3);
    });
});
