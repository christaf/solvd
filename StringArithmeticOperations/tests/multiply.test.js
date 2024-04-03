const { describe, expect, test } = require('@jest/globals');
const StringOperations = require('../stringOperations');

describe('multiplication module', () => {

    test('multiply 2 * 2 to equal 4', () => {
        expect(StringOperations.multiply("2", "2")).toBe("4");
    });

    test('multiply 3 * 5 to equal 15', () => {
        expect(StringOperations.multiply("3", "5")).toBe("15");
    });

    test('multiply 77 * 77 to equal 5929', () => {
        expect(StringOperations.multiply("77", "77")).toBe("5929");
    });

    test('multiply 123 * 1 to equal 123', () => {
        expect(StringOperations.multiply("123", "1")).toBe("123");
    });

    test('multiply 1 * 123 to equal 123', () => {
        expect(StringOperations.multiply("1", "123")).toBe("123");
    });
});