const createCounter = () => {
    let count = 0;
    return () => ++count;
};

const repeatFunction = (foo, times) => {

    if (times < 0) {
        return () => {
            while (true) { foo(); }
        }
    }

    return () => {
        for (let i = 0; i < times; i++) {
            foo();
        }
    };
}

module.exports = {createCounter, repeatFunction}