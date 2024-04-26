//Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object.
// The function should handle circular references and complex nested structures. Do not use JSON methods.


function deepCloneObject(obj, clonedObjects = new WeakMap()) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (clonedObjects.has(obj)) {
        return clonedObjects.get(obj);
    }

    const cloned = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    
    clonedObjects.set(obj, cloned);

    const props = Object.getOwnPropertyDescriptors(obj);
    for (let key in props) {
        if (typeof props[key].value === 'object' && props[key].value !== null) {
            cloned[key] = deepCloneObject(props[key].value, clonedObjects);
        } else {
            cloned[key] = props[key].value;
        }
    }

    return cloned;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: 'New York',
        street: 'Broadway'
    }
};

const person2 = deepCloneObject(person);

console.log(person);
console.log(person2);
console.log(person2 === person); 

module.exports = {deepCloneObject, person, person2}