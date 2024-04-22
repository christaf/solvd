const lazyMap = (array, mappingFunction) => ({
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < array.length) {
                    return { value: mappingFunction(array[index++]), done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
});


const fibonacciGenerator = () => ({
    [Symbol.iterator]: function() {
        let prev = 0;
        let current = 1;
        return {
            next: () => {
                const result = { value: current, done: false };
                [prev, current] = [current, prev + current];
                return result;
            }
        };
    }
});

//examples

const array = [1, 2, 3, 4, 5];
const mappedLazyGenerator = lazyMap(array, x => x * 2);

for (const value of mappedLazyGenerator) {
    console.log(value);
}

const fibLazyGenerator = fibonacciGenerator();
let count = 0;
for (const fib of fibLazyGenerator) {
    console.log(fib);
    if (++count >= 10) break;
}
