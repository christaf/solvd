const calculateFactorial = (n, accumulator = 1) => {
    if (n === 0) {
        return accumulator;
    } else {
        return calculateFactorial(n - 1, n * accumulator);
    }
};

const power = (base, exponent, accumulator = 1) => {
    if (exponent === 0) {
        return accumulator;
    } else if (exponent > 0) {
        return power(base, exponent - 1, accumulator * base);
    } else {
        return power(base, exponent + 1, accumulator / base);
    }
};