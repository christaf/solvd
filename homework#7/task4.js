//Task 4: Implement promisify Function
// Your task is to implement a function called promisify that converts a callback-style function into a function that returns a promise.
// Instructions
// Implement a function called promisify that takes a callback-style function as an argument.
// The promisify function should return a new function that returns a promise.
// The new function should execute the original callback-style function and resolve the promise with its result or reject the promise with any error encountered.


class solution {

    static promisify(callbackStyleFunction) {
        return function (...args) {
            return new Promise((resolve, reject) => {
                callbackStyleFunction(...args, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        };
    }
}

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = solution.promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
            console.log("Promised function result:", result); // Expected: 6
        }
    )
    .catch(error => {
            console.error("Promised function error:", error);
        }
    );

module.exports = solution;