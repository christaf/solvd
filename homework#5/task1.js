// Task 1: Advanced Array Filtering
// Create a function called customFilterUnique that takes an array and a callback function as arguments. 
// The customFilterUnique function should filter the array using the callback function to determine uniqueness. 
// The resulting array should contain only unique elements based on the callback's logic.
// Use the customFilterUnique function to filter an array of objects based on a specific property and return only unique objects.

class solution1 {
    static customFilterUnique(arr, callback) {
        return arr.filter((item, index) => {
            let firstOccIndex = arr.findIndex((item2) => callback(item, item2)) 
            let lastOccIndex = arr.findLastIndex((item2) => callback(item, item2))
            return firstOccIndex === lastOccIndex;
        });
    }

    static exactSameName(item1, item2) {
        return item1.name === item2.name;
    }

    static mod5(item1, item2) {
        return item1 % 5 === item2 % 5;
    }

    static filterSameName(arr) {
        return this.customFilterUnique(arr, this.exactSameName)
    }

    static filterMod5(arr) {
        return this.customFilterUnique(arr, this.mod5)
    }

}

const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Adam' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Jane' },
    { id: 5, name: 'John' },
    { id: 6, name: 'Jane' }
];

const uniqueArr = solution1.filterSameName(arr);
console.log(uniqueArr); // [{ id: 2, name: 'Adam' }]


const arr2 = [1, 5, 2, 6, 3, 4, 1, 3, 4, 5, 6]
const uniqueArr2 = solution1.filterMod5(arr2);
console.log(uniqueArr2); // [2]

module.exports = solution1;