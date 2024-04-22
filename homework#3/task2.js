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

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const toLowerCaseAndSplit = text => text.toLowerCase().split(/\W+/);
const filterUnique = words => words.filter((word, index, array) => array.indexOf(word) === index);

const sortWords = words => words.sort();

const filterUniqueWords = compose(sortWords, filterUnique, toLowerCaseAndSplit);

//generated text
const text = "This is a sample text with some repeated words like sample and text";
const uniqueWords = filterUniqueWords(text);
console.log(uniqueWords);


const getAvgGrade = student => student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length

const calculateAvgArray = students => students.map(student => getAvgGrade(student))

const calculateAvg = averages => averages.reduce((acc, grade) => acc + grade, 0) / averages.length

const getAverage = compose(calculateAvg, calculateAvgArray)
/*

class Student {
    name;
    grades = [];

    constructor(name, grades) {
        this.name = name
        this.grades = grades
    }
}

const students = []
students.push(new Student("ela", [70, 80, 90]))
students.push(new Student("martin", [90, 90, 90]))
*/
const students2 = [
    {name: "Alice", grades: [80, 85, 90]},
    {name: "Bob", grades: [75, 85, 95]},
    {name: "Charlie", grades: [70, 80, 90]}
];

const averageGrade = getAverage(students2);
//const averageGrade2 = calculateAvg(calculateAvgArray(students))
console.log(averageGrade);
