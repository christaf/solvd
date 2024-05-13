//Task 3: Implement Chaining of Promises as a Separate Function
// Your task is to implement a function called chainPromises that facilitates chaining of promises.
// The function should accept an array of functions that return promises and execute them sequentially.
// Instructions
// Implement a function called chainPromises that takes an array of functions as an argument.
// Each function in the array should return a promise.
// The chainPromises function should execute the functions sequentially, chaining the promises together.
// The returned promise should resolve with the value of the last resolved promise or reject with the reason of the first rejected promise.


class solution {

    static chainPromises(functionsArray) {
        return new Promise((resolve, reject) => {
            let promiseChain = Promise.resolve();
            functionsArray.forEach(asyncFunction => {
                promiseChain = promiseChain.then(asyncFunction);
            });
            promiseChain.then(resolve).catch(reject);
        });
    }

}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

solution.chainPromises(functionsArray)
    .then(result => {
            console.log("Chained promise result:", result);
        }
    )
    .catch(error => {
            console.error("Chained promise error:", error);
        }
    );
// Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"

module.exports = solution;