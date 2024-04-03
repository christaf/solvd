const { describe, expect, test } = require('@jest/globals');
const StringOperations = require('../stringOperations');

describe('subtraction module', () => {
    test('subtract 2 - 2 to equal 0', () => {
        expect(StringOperations.minus("2", "2")).toBe("0");
    });

    test('subtract 3 - 2 to equal 0', () => {
        expect(StringOperations.minus("3", "2")).toBe("1");
    });

    test('subtract 12 - 2 to equal 0', () => {
        expect(StringOperations.minus("12", "2")).toBe("10");
    });

    test('subtract 1001 - 2 to equal 0', () => {
        expect(StringOperations.minus("1001", "2")).toBe("999");
    });

    test('subtract 8000 - 409 to equal 0', () => {
        expect(StringOperations.minus("8000", "409")).toBe("7591");
    });

});


