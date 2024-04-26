//Implement a function called validateObject that takes an object and a validation schema as arguments.
// The schema should define the required properties, their types, and any additional validation rules.
// The function should return true if the object matches the schema, and false otherwise.
// You can choose any schema you want.

function validateObject(obj, schema) {
    for (let key in obj) {
        if (!schema.hasOwnProperty(key)) {
            return false; 
        }
        if (typeof obj[key] !== schema[key].type) {
            return false; 
        }
    }

    for (let key in schema) {
        if (schema[key].required && !obj.hasOwnProperty(key)) {
            return false; 
        }
    }

    return true; 
}

// Example usage:
const obj = {
    name: "John",
    age: 25,
    auto: "nissan"
};

const schema = {
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    email: { type: 'string', required: false },
    address: { type: 'string', required: false },
};

console.log(validateObject(obj, schema)); // Output: true

module.exports = {validateObject, obj, schema}
