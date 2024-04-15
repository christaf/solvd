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
        switch (type) {
            case 'string':
                return this.stringifyValue(value);
            case 'number':
                return this.convertToNumber(value);
            case 'boolean':
                if (typeof value === 'boolean') {
                    return value;
                } else if (typeof value === 'string') {
                    if (value.toLowerCase() === 'true') {
                        return true;
                    } else if (value.toLowerCase() === 'false') {
                        return false;
                    }
                } else if (typeof value === 'number') {
                    return value > 0;
                }
                throw new Error('Cannot coerce value to boolean.');
            default:
                throw new Error('Unsupported type.');
        }
    }

};

module.exports = dataTransformer;