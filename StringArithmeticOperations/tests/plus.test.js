const { describe, expect, test } = require('@jest/globals');
const StringOperations = require('../stringOperations');

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(StringOperations.plus("1", "2")).toBe("3");
    });

    test('adds 12 + 13 to equal 25', () => {
        expect(StringOperations.plus("12", "13")).toBe("25");

    });

    test('adds 11 + 9 to equal 20', () => {
        expect(StringOperations.plus("11", "9")).toBe("20");
    });

    test('adds 9999 + 2 to equal 10001', () => {
        expect(StringOperations.plus("9999", "2")).toBe("10001");
    });

});


