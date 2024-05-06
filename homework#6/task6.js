//Task 6: Currying Function Implementation
// Your task is to implement a currying function that converts a given function into a curried version.
// Currying is a technique in which a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.
// Instructions
// Implement a function called curry that takes two arguments:
// func: The function to be curried.
// arity: The number of arguments the original function takes.
// The curry function should return a new curried function.
// The curried function should keep accepting arguments until it has received the specified number of arguments (arity).
// Once all arguments are received, the original function should be executed with the collected arguments.
// If the curried function is invoked with fewer arguments than arity, it should return a new curried function that waits for the remaining arguments.
// Example
// function multiply(a, b, c) {
// 	return a * b * c;
// }
//
// const curriedMultiply = curry(multiply, 3);
//
// const step1 = curriedMultiply(2); // Returns a curried function
// const step2 = step1(3); // Returns a curried function
// const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24
//
// console.log("Result:", result); // Expected: 24

class solution {

    static curry = (func, arity) => {
        return function curried(...args) {
            if (args.length >= arity) {
                return func(...args);
            } else {
                return function(...nextArgs) {
                    return curried(...args, ...nextArgs);
                };
            }
        };
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = solution.curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24

//checking if multiplying 4 elements using curried function with arity 3

// const curriedMultiply2 = solution.curry(multiply, 3);
// const step3 = curriedMultiply(2)(3)(4)(5);
// console.log("Result:", step3); // Expected: 2 * 3 * 4 = 24
//throws error as the function is curried with arity 3 and we are trying to pass 4 arguments

module.exports = solution;