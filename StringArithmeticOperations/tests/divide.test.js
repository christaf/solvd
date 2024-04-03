const { describe, expect, test } = require('@jest/globals');
const StringOperations = require('../stringOperations');

describe('divide module', () => {

    test('divides 4 / 2 to equal 2', () => {
        expect(StringOperations.divide("4", "2")).toBe("2");
    });

    test('divides 2555 / 5 to equal 511', () => {
        expect(StringOperations.divide("2555", "5")).toBe("511");
    });

    test('divides 252525 / 25 to equal 10101', () => {
        expect(StringOperations.divide("252525", "25")).toBe("10101");
    });

    test('divides 621108 / 729 to equal 852', () => {
        expect(StringOperations.divide("621108", "729")).toBe("852");
    });


});