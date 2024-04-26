//Implement a function called observeObject that takes an object and a callback function as arguments.
// The function should return a proxy object that wraps the original object and invokes the callback
// function whenever any property of the object is accessed or modified.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

//Use the observeObject function to create a proxy for the person object from Task 1.
// The callback function should log the property name and the action (get or set) performed on the object.

let observedPerson = observeObject(person, function (key, value, action) {
    console.log(`${action} ${key}: ${value}`);
});

function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, key) {
            callback(key, target[key], 'get');
            return target[key];
        },
        set(target, key, value) {
            callback(key, value, 'set');
            target[key] = value;
            return true;
        }
    });
}
observedPerson.fullName = 'Mateusz Krzysiek';
observedPerson.fullName;