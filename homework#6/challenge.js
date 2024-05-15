class solution {
    static _ = Symbol('placeholder');

    static curry = (func, arity) => {
        return function curried(...args) {
            // Function to replace placeholders with actual arguments
            const replacePlaceholders = (existingArgs, newArgs) => {
                const result = [];
                let newArgsIndex = 0;

                for (const arg of existingArgs) {
                    if (arg === solution._ && newArgsIndex < newArgs.length) {
                        result.push(newArgs[newArgsIndex++]);
                    } else {
                        result.push(arg);
                    }
                }

                // Add any remaining new arguments
                result.push(...newArgs.slice(newArgsIndex));
                return result;
            };

            args = replacePlaceholders(args, []);

            if (args.length >= arity && !args.slice(0, arity).includes(solution._)) {
                return func(...args.slice(0, arity));
            } else {
                return function(...nextArgs) {
                    return curried(...replacePlaceholders(args, nextArgs));
                };
            }
        };
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

function randomExpression(a, b, c) {
    return a + b * c;
}


const curriedMultiply = solution.curry(randomExpression, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(solution._, 4); // Returns a curried function
const result = step2(3); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24

// Using the placeholder in different positions
const result2 = curriedMultiply(solution._)(3)(2)(4); // Should also return 24
console.log("Result2:", result2); // Expected: 24

const result3 = curriedMultiply(2)(solution._)(4)(3); // Should also return 24
console.log("Result3:", result3); // Expected: 24

const result5 = curriedMultiply(2)(solution._, 3)(4); // Should also return 24
console.log("Result5:", result5); // Expected: 24

const result6 = curriedMultiply(2)(3)(4, solution._); // Should also return 24
console.log("Result6:", result6); // Expected: 24

const result7 = curriedMultiply(2)(3)(solution._, 4); // Should also return 24
console.log("Result6:", result6); // Expected: 24

// Excess arguments should still be handled correctly
try {
    const result4 = curriedMultiply(2)(3)(4)(5);
    console.log("Result4:", result4);
} catch (error) {
    console.log("Error:", error.message); // Expected error due to excess arguments
}

module.exports = solution;
