// Task 4: Array Intersection and Union
// Create a function called getArrayIntersection that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.
// Create a function called getArrayUnion that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.

class solution4 {
    static getArrayIntersection(arr1, arr2) {
        return arr1.filter((item, index) => arr2.includes(item) && arr1.indexOf(item) === index);
    }

    static getArrayUnion(arr1, arr2) {
        return [...new Set([...arr1, ...arr2])];
    }
    //and without using set

    static getArrayUnionWithoutSet(arr1, arr2) {
        let res = []
        return res.concat(arr1.filter((item, index) => arr1.indexOf(item) === index)).concat(arr2.filter(item => !arr1.includes(item)));
    }
}


//in methods above aspect of checking the index of the item in the array is to make sure that the item is unique in the array, could be done with a set

const arr1 = [1, 2, 2, 2, 3, 1, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9, 2, 11, 13, 15];

console.log(solution4.getArrayIntersection(arr1, arr2)); // [1, 2, 3, 5]
console.log(solution4.getArrayUnion(arr1, arr2)); // [1, 2, 3, 4, 5, 7, 9, 11, 13, 15]
console.log(solution4.getArrayUnionWithoutSet(arr1, arr2)); // [1, 2, 3, 4, 5, 7, 9, 11, 13, 15]

module.exports = solution4;