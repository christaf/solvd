//Implement a function called createImmutableObject that takes an object as an argument and
// returns a new object with all its properties made read-only and non-writable using property
// descriptors. The function should handle nested objects and arrays recursively.

function createImmutableObject(obj) {
    let newObj = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = createImmutableObject(obj[key]);
        } else {
            Object.defineProperty(newObj, key, {
                value: obj[key],
                writable: false
            });
        }
    }

    return newObj;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

//Use the createImmutableObject function to create an immutable version of the person object from Task 1.

let immutablePerson = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(immutablePerson));