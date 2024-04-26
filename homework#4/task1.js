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

person.toggleProperty = function (key) {
    if (Object.getOwnPropertyDescriptor(person, key).writable) {
        Object.defineProperty(person, key, {
            writable: false
        });
    } else {
        Object.defineProperty(person, key, {
            writable: true
        });
    }
}


//part 2

person.updateInfo = function (newInfo) {
    Object.keys(newInfo).forEach(function (key) {
        if (typeof newInfo[key] === 'object' && newInfo[key] !== null) {
            person[key].updateInfo(newInfo[key]);
        }else if (Object.getOwnPropertyDescriptor(person, key).writable) {
            person[key] = newInfo[key];
        } else {
            person.toggleProperty(key);
            person[key] = newInfo[key];
            person.toggleProperty(key);
        }
    });

};

makePropertiesReadOnly(person);

console.log(person);
person.age = 40;
console.log(person);

person.updateInfo({age: 50});

//part 3

//I am not sure if it's a correct way
const addAddress = () => {
    Object.defineProperty(person, 'address', {
        value: {},
        enumerable: false,
        configurable: false
    });
}

addAddress()


let keys = Object.getOwnPropertyDescriptors(person)
console.log(keys);


person.address = {city: 'New York', street: 'Broadway'}
person.updateInfo({address: {city: 'New York', street: 'Broadway'}})
console.log(Object.getOwnPropertyDescriptors(person))
console.log(person)

module.exports = {updateInfo, makePropertiesReadOnly, person, toggleProperty, addAddress}