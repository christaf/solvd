//Task 2: Implement promiseAllSettled Function
// Your task is to implement a function called promiseAllSettled that mimics the behavior of Promise.allSettled().
// The function should accept an array of promises and return a promise that resolves to an array of objects representing the settlement of each promise.
// Instructions
// Implement a function called promiseAllSettled that takes an array of promises as an argument.
// The function should return a new promise that resolves with an array of objects representing the settlement of each promise in the input array.
// Each object in the resolved array should have properties status and value or reason. The status can be either 'fulfilled' or 'rejected',
// and value should hold the resolved value (if fulfilled) or reason should hold the rejection reason (if rejected).
// Example
// const promises = [
//   Promise.resolve(1),
//   Promise.reject("Error occurred"),
//   Promise.resolve(3)
// ];
//
// promiseAllSettled(promises)
//   .then(results => {
//     console.log("All promises settled:", results);
//     // Expected: [{ status: 'fulfilled', value: 1 },
//     //            { status: 'rejected', reason: 'Error occurred' },
//     //            { status: 'fulfilled', value: 3 }]
//   });

class solution {

    static promiseAllSettled(promises) {
        return new Promise((resolve) => {

            // edge case: if the argument is not an array of promises
            if (!Array.isArray(promises)) {
                resolve(new TypeError('Argument must be an array of promises'));
                return;
            }
            let settledPromises = [];
            let completedPromises = 0;

            promises.forEach((promise, index) => {
                promise.then(value => {
                    settledPromises[index] = {status: 'fulfilled', value};
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(settledPromises);
                    }
                }).catch(reason => {
                    settledPromises[index] = {status: 'rejected', reason};
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(settledPromises);
                    }
                });
            });
        });
    }

}

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

solution.promiseAllSettled(promises)
    .then(results => {
            console.log("All promises settled:", results);
        }
    );

module.exports = solution;