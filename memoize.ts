function memoize(func: Function) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = func.apply(this, args);
        cache[key] = result;

        return result;
    };
}


function add(x: number, y: number) {
    if (x && y) {
        return x + y;
    }
}

// Create a memoized version of the 'add' function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(3, 5));