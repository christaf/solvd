//Task 1: Implement promiseAll Function
// Your task is to implement a function called promiseAll that mimics the behavior of Promise.all().
// The function should accept an array of promises and return a single promise that resolves to an
// array of resolved values or rejects with the reason of the first rejected promise.
// Instructions
// Implement a function called promiseAll that takes an array of promises as an argument.
// The function should return a new promise that resolves when all promises in the input array have resolved, and rejects if any of the promises reject.
// If all promises resolve, the resolved value of the returned promise should be an array containing the resolved values of the input promises, in the same order.
// If any promise rejects, the returned promise should reject with the reason of the first rejected promise.

class solution {


    static promiseAll(promises) {
        return new Promise((resolve, reject) => {

            // edge case: if the argument is not an array of promises
            if (!Array.isArray(promises)) {
                reject(new TypeError('Argument must be an array of promises'));
                return;
            }

            let resolvedValues = [];
            let completedPromises = 0;

            promises.forEach((promise, index) => {
                promise.then(value => {
                    resolvedValues[index] = value;
                    completedPromises++;

                    // Check if all promises have resolved
                    if (completedPromises === promises.length) {
                        resolve(resolvedValues);
                    }
                }).catch(reject); // If any promise rejects, reject with its reason
            });
        });
    }

}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    // Promise.reject(new Error('Error in promise 4'))
];

solution.promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });

module.exports = solution;