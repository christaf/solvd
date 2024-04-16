const {calculateDiscountedPrice, calculateTotalPrice, Product} = require('../task1');
const {describe, test, expect} = require("@jest/globals");

describe('calculateDiscountedPrice function', () => {
    const productArray = [
        new Product('Product 1', 100),
        new Product('Product 2', 200)
    ];

    test('should return array of products with discounted prices (10% discount)', () => {
        expect(calculateDiscountedPrice(productArray, 10)).toEqual([
            new Product('Product 1', 90),
            new Product('Product 2', 180)
        ]);
        // Ensure original array remains unchanged
        expect(productArray).toEqual([
            new Product('Product 1', 100),
            new Product('Product 2', 200)
        ]);
    });

    test('should return array of products with discounted prices (20% discount)', () => {
        expect(calculateDiscountedPrice(productArray, 20)).toEqual([
            new Product('Product 1', 80),
            new Product('Product 2', 160)
        ]);

        expect(productArray).toEqual([
            new Product('Product 1', 100),
            new Product('Product 2', 200)
        ]);
    });
});

describe('calculateTotalPrice function', () => {
    const productArray = [
        new Product('Product 1', 100),
        new Product('Product 2', 200)
    ];

    test('should return the total price of all products', () => {
        expect(calculateTotalPrice(productArray)).toBe(300);

        expect(productArray).toEqual([
            new Product('Product 1', 100),
            new Product('Product 2', 200)
        ]);
    });
});
