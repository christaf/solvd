//part 1

class Person {

    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const getFullName = person => `${person.firstName} ${person.lastName}`;

console.log(getFullName(new Person("adam", "grey")))


//part2
const filterUniqueWords = text =>
    text
        .toLowerCase()
        .split(/\W+/)
        .filter(word => word.length > 0)
        .filter((word, index, array) => array.indexOf(word) === index) //we don't take words which already exist in the list
        .sort();

//generated text
const text = "This is a sample text with some repeated words like sample and text";
const uniqueWords = filterUniqueWords(text);
console.log(uniqueWords);


const getAverageGrade = students =>
    students
        .map(student => student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length)
        .reduce((acc, avg, index, array) => acc + avg / array.length, 0);


const students = [
    { name: "Alice", grades: [80, 85, 90] },
    { name: "Bob", grades: [75, 85, 95] },
    { name: "Charlie", grades: [70, 80, 90] }
];

const averageGrade = getAverageGrade(students);
console.log(averageGrade);
