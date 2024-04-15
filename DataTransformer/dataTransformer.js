const dataTransformer = {
    addValues: (a, b) => {

        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b)
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        }
        if (typeof a === 'boolean' && typeof b === 'boolean') {
            return a || b
        }

        throw new Error('Not supported types');


    },
    stringifyValue: (value) => {
        if (typeof value === 'object' || Array.isArray(value)) {
            return JSON.stringify(value);
        } else {
            return String(value);
        }
    },

    invertBoolean: (bool) => {
        if (typeof bool !== 'boolean') {
            throw new Error('Inversion is only possible for booleans.');
        }
        return !bool;
    },

    convertToNumber: (value) => {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error('Conversion to number is not possible.');
        }
        return num;
    },

    coerceToType: (value, type) => {

        switch (typeof value) {
            case 'string':
                switch (type) {
                    case 'number':
                        return Number(value);
                    case 'boolean':
                        return value === 'true';
                    case 'string':
                        return value;
                    default:
                        throw new Error('Unsupported type.');

                }
            case 'number':
                switch (type) {
                    case 'number':
                        return value;
                    case 'boolean':
                        return value !== 0;
                    case 'string':
                        return String(value);
                    default:
                        throw new Error('Unsupported type.');
                }
            case 'boolean':
                switch (type) {
                    case 'number':
                        return value ? 1 : 0;
                    case 'boolean':
                        return value;
                    case 'string':
                        return String(value);
                    default:
                        throw new Error('Unsupported type.');
                }
            case 'object':

                switch (type) {
                    case 'string':
                        return JSON.stringify(value);
                    default:
                        throw new Error('Unsupported type.');
                }

            case 'undefined':
                throw new Error('Unsupported type.');

            case 'null':
                throw new Error('Unsupported type.');
            case 'Array':
                switch (type) {
                    case 'string':
                        return JSON.stringify(value);
                    default:
                        throw new Error('Unsupported type.');
                }
        }

    }

};

module.exports = dataTransformer;