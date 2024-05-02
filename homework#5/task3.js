// Task 3: Array Shuffling
// Create a function called customShuffle that takes an array as an argument and returns a new array with its elements randomly shuffled.
// Implement the customShuffle function using an efficient shuffling algorithm to achieve uniform randomness.

class solution3 {
    static customShuffle(arr) {
        const shuffledArr = [...arr];
        for (let i = 0; i < shuffledArr.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; //I knew about it from a Python project and I am glad it works in JS too :D
        }
        return shuffledArr;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution3.customShuffle(arr));

module.exports = solution3;