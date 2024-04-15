const dataTransformer = require('./dataTransformer');
const {describe, test, expect} = require("@jest/globals");

describe('addValues', () => {
    test('adds two numbers correctly', () => {
        expect(dataTransformer.addValues(5, 10)).toBe(15);
    });

    test('concatenates two strings correctly', () => {
        expect(dataTransformer.addValues('hello', 'world')).toBe('helloworld');
    });

    test('returns true for OR of two booleans', () => {
        expect(dataTransformer.addValues(true, false)).toBe(true);
    });

    test('throws an error for unsupported types', () => {
        expect(() => {
            dataTransformer.addValues([], {});
        }).toThrow('Not supported types');
    });
});

describe('stringifyValue', () => {
    test('converts object to JSON string', () => {
        expect(dataTransformer.stringifyValue({key: 'value'})).toBe('{"key":"value"}');
    });

    test('converts string to string', () => {
        expect(dataTransformer.stringifyValue('hello')).toBe('hello');
    });
});

describe('invertBoolean', () => {
    test('inverts true to false', () => {
        expect(dataTransformer.invertBoolean(true)).toBe(false);
    });

    test('throws an error for non-boolean input', () => {
        expect(() => {
            dataTransformer.invertBoolean('true');
        }).toThrow('Inversion is only possible for booleans.');
    });
});

describe('convertToNumber', () => {
    test('converts string number to number', () => {
        expect(dataTransformer.convertToNumber('42')).toBe(42);
    });

    test('throws an error for non-convertible input', () => {
        expect(() => {
            dataTransformer.convertToNumber('hello');
        }).toThrow('Conversion to number is not possible.');
    });
});

describe('coerceToType', () => {
    test('coerces string to number', () => {
        expect(dataTransformer.coerceToType('42', 'number')).toBe(42);
    });

    test('coerces string "true" to boolean true', () => {
        expect(dataTransformer.coerceToType('true', 'boolean')).toBe(true);
    });

    test('throws an error for unsupported type', () => {
        expect(dataTransformer.coerceToType([], 'number')).toBe(0)
    });

    test('throws an error for unsupported coercion', () => {
        expect(() => {
            dataTransformer.coerceToType('hello', 'boolean');
        }).toThrow('Cannot coerce value to boolean.');
    });
});
