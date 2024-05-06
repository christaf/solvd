// Task 3: Multiline Tagged Template
// Implement a multiline tagged template function called multiline that takes a template string and returns a string with line numbers added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation of each line.
//     const code = multiline\`
// function add(a, b) {
// return a + b;
// }
// \`;
//
// console.log(code);
// // Expected:
// // "1 function add(a, b) {
// //  2 return a + b;
// //  3 }"

class solution {
    static multiline = (strings) => {
        return strings.raw[0].trim().split('\n').map((line, index) => {
            return `${index + 1} ${line}`;
        }).join('\n');
    };

}

const code = solution.multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);

module.exports = solution;