// Task 2: Array Chunking
// Create a function called chunkArray that takes an array and a chunk size as arguments. 
// The chunkArray function should divide the array into smaller arrays, each containing 
// elements of the specified chunk size. The function should return an array of arrays.
// Optimize the chunkArray function to minimize memory usage while chunking the array.


class solution2 {
    static chunkArray(arr, chunkSize) {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArr.push(arr.slice(i, i + chunkSize)); //using slice to minimize memory usage (it's a shallow copy of the array, not a deep copy)
        }
        return chunkedArr;
    }
}

console.log(solution2.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

module.exports = solution2;