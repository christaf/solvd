//Implement a function called validateObject that takes an object and a validation schema as arguments.
// The schema should define the required properties, their types, and any additional validation rules.
// The function should return true if the object matches the schema, and false otherwise.
// You can choose any schema you want.

function validateObject(obj, schema) {
    for (let key in schema) {
        if (!obj.hasOwnProperty(key)) {
            return false;
        }
        if (typeof obj[key] !== schema[key].type) {
            return false;
        }
        //TODO add additional validation rules
    }
    return true;
}