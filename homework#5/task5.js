// Task 5: Array Performance Analysis
// Implement a function called measureArrayPerformance that takes a function and an array as arguments. 
// The measureArrayPerformance function should execute the provided function with the given array as input and measure the execution time.
// Use the measureArrayPerformance function to compare the performance of built-in array methods (map, filter, reduce, etc.) against your custom array manipulation functions.
const solution1 = require('./task1.js');
const solution2 = require('./task2.js');
const solution3 = require('./task3.js');
const solution4 = require('./task4.js');

class solution5 {
    static measureArrayPerformance(func, arr) {
        const start = performance.now()
        func(arr);
        const end = performance.now()
        return end - start;
    }

    static measureArrayPerformanceOfTwoArrays(func, arr1, arr2) {
        const start = performance.now()
        func(arr1, arr2);
        const end = performance.now()
        return end - start;
    }

    static test(func, arr) {
        return solution5.measureArrayPerformance(func, arr);
    }

    static testTwoArrays(func, arr1, arr2) {
        return solution5.measureArrayPerformanceOfTwoArrays(func, arr1, arr2);
    }

    static measureMapperformance(arr) {
        const mapper = (arr) => arr.map(item => item * 2);
        return solution5.measureArrayPerformance(mapper, arr);
    }

    static measureFilterPerformance(arr) {
        const filterer = (arr) => arr.filter(item => item % 2 === 0);
        return solution5.measureArrayPerformance(filterer, arr);
    }

    static measureReducePerformance(arr) {
        const reducer = (arr) => arr.reduce((acc, item) => acc + item, 0);
        return solution5.measureArrayPerformance(reducer, arr);
    }

}

//testing the performance of chunkArray from task2.js
console.log(solution5.test(solution2.chunkArray, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3) + 'ms');

//testing the performance of customShuffle from task3.js
console.log(solution5.test(solution3.customShuffle, [1, 2, 3, 4, 5, 6, 7, 8, 9]) + 'ms');

//testing the performance of getArrayIntersection from task4.js
console.log(solution5.testTwoArrays(solution4.getArrayIntersection, [1, 2, 2, 2, 3, 1, 3, 4, 5], [1, 3, 5, 7, 9, 2, 11, 13, 15]) + 'ms');
console.log(solution5.testTwoArrays(solution4.getArrayUnion, [1, 2, 2, 2, 3, 1, 3, 4, 5], [1, 3, 5, 7, 9, 2, 11, 13, 15]) + 'ms');

console.log(solution5.measureMapperformance([1, 2, 3, 4, 5, 6, 7, 8, 9]) + 'ms');
console.log(solution5.measureFilterPerformance([1, 2, 3, 4, 5, 6, 7, 8, 9]) + 'ms');
console.log(solution5.measureReducePerformance([1, 2, 3, 4, 5, 6, 7, 8, 9]) + 'ms');

module.exports = solution5;