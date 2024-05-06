//Task 4: Implementing Debounce Function
// Description
// Your task is to implement a debounce function that takes a function and a delay time as arguments.
// The goal of the debounce function is to ensure that the provided function is only executed
// after the user stops invoking it for the specified delay time.

// Instructions
// Implement a function called debounce that takes two arguments:
// func: The function to be debounced.
// delay: The delay time (in milliseconds) before the function is executed.
// The debounce function should return a new function that wraps the provided function.
// When the new function is invoked, it should:
// Clear any existing timeout.
// Set a new timeout to execute the provided function after the specified delay time.
// Test your debounce function by using it to debounce an input event listener.
// Ensure that the provided function is only called once after the user stops typing for the specified delay time.

// Example
// function debouncedSearch(query) {
// 	// Perform search operation with the query
// 	console.log("Searching for:", query);
// }
//
// const debouncedSearchHandler = debounce(debouncedSearch, 300);
//
// const inputElement = document.getElementById("search-input");
// inputElement.addEventListener("input", event => {
// 	debouncedSearchHandler(event.target.value);
// });


class solution {

    static debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

}

function debouncedSearch(query) {
    // Perform search operation with the query
    console.log("Searching for:", query);
}


const debouncedSearchHandler = solution.debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});

module.exports = solution;