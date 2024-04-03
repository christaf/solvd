class StringOperations {
    /**
     * Compares two strings representing numbers and returns true if the number contained in str1 is greater than or equal to the number in str2.
     * @param {string} str1 - The first string to be compared.
     * @param {string} str2 - The second string to be compared.
     * @returns {boolean} - True if the number in str1 is greater than or equal to the number in str2, false otherwise.
     */
    static compare(str1, str2) {
        if (str1.length > str2.length) {
            return true
        } else if (str2.length > str1.length) {
            return false
        } else {
            return (parseInt(str1[0]) - parseInt(str2[0]) >= 0)
        }
    }

    /**
     * Adds two strings representing numbers and returns result as a string.
     * @param {string} str1 - The first string to be added.
     * @param {string} str2 - The second string to be added.
     * @returns {string} - The sum of str1 and str2 as a string.
     */
    static plus(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        str1 = str1.padStart(maxLen, '0');
        str2 = str2.padStart(maxLen, '0');

        let result = '';
        let carry = 0;

        for (let i = maxLen - 1; i >= 0; i--) {
            const sum = parseInt(str1[i]) + parseInt(str2[i]) + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }

        if (carry > 0) {
            result = carry + result;
        }

        return result;
    }

    /**
     * Subtracts the second string representing a number from the first string and returns the result as a string.
     * @param {string} str1 - The string from which str2 is subtracted.
     * @param {string} str2 - The string to be subtracted from str1.
     * @returns {string} - The result of subtracting str2 from str1 as a string.
     */
    static minus(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        str1 = str1.padStart(maxLen, '0');
        str2 = str2.padStart(maxLen, '0');

        let result = '';
        let borrow = 0;

        for (let i = maxLen - 1; i >= 0; i--) {
            let diff = parseInt(str1[i]) - parseInt(str2[i]) - borrow;
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            result = diff + result;
        }

        return result.replace(/^0+/, '') || '0';
    }

    /**
     * Multiplies two strings representing numbers and returns the result as a string.
     * @param {string} str1 - The first string to be multiplied.
     * @param {string} str2 - The second string to be multiplied.
     * @returns {string} - The result of multiplying str1 and str2 as a string.
     */
    static multiply(str1, str2) {

        let result = '0';

        for (let i = str1.length - 1; i >= 0; i--) {
            let tempResult = '';
            let carry = 0;
            for (let j = str2.length - 1; j >= 0; j--) {
                const product = parseInt(str1[i]) * parseInt(str2[j]) + carry;
                tempResult = (product % 10) + tempResult;
                carry = Math.floor(product / 10);
            }
            if (carry > 0) {
                tempResult = carry + tempResult;
            }
            tempResult = tempResult + '0'.repeat(str1.length - 1 - i);
            result = StringOperations.plus(result, tempResult);
        }

        return result.replace(/^0+(?=\d)/, '') || '0';
    }

    /**
     * Divides a string representing a dividend by another string representing a divisor, and returns the result as a string.
     * @param {string} dividend - The string representing the dividend to be divided.
     * @param {string} divisor - The string representing the divisor to divide the dividend by.
     * @returns {string} - The result of dividing the dividend by the divisor as a string.
     */
    static divide(dividend, divisor) {

        let result = '';
        let tempDividend = '';

        for (let i = 0; i < dividend.length; i++) {
            tempDividend += dividend[i];

            let quotient = 0;

            while (StringOperations.compare(tempDividend, divisor)) {
                tempDividend = StringOperations.minus(tempDividend, divisor);
                quotient++;
            }

            result += quotient;

        }

        return result.replace(/^0+(?=\d)/, '') || '0';
    }

}

//attaching functions to the String prototype so that they are accessible for operations directly on strings

String.prototype.plus = function (str) {
    return StringOperations.plus(this.toString(), str)
}
String.prototype.minus = function (str) {
    return StringOperations.minus(this.toString(), str)
}
String.prototype.divide = function (str) {
    return StringOperations.divide(this.toString(), str)
}
String.prototype.multiply = function (str) {
    return StringOperations.multiply(this.toString(), str)
}

module.exports = StringOperations;