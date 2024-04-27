const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};


//part 1
function makePropertiesReadOnly(obj) {

    for (let key in obj) {
        Object.defineProperty(obj, key, {
            writable: false
        });
    }

}


//part 2

person.updateInfo = function (newInfo) {

    for (let key in newInfo) {
        if (Object.getOwnPropertyDescriptor(person, key).writable) {
            person[key] = newInfo[key];
        } else {
            throw new Error(`Property '${key}' is read-only.`);
        }
    }
};

makePropertiesReadOnly(person);

console.log(person);
// person.age = 40; // Should throw an error
console.log(person);

try {
    person.updateInfo({age: 50});
} catch (error) {
    console.error(error.message);
}

Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
});

person.address = { city: 'New York', street: 'Broadway' };
try {
    person.updateInfo({ address: { city: 'New York', street: 'Broadway' } });
} catch {
    console.error(error.message)
}

console.log(person);

for (let key in Object.getOwnPropertyDescriptors(person)){
    console.log(key);
}

module.exports = {makePropertiesReadOnly, person}