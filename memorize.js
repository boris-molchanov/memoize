function memoize(func) {
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


function add(x, y) {
    return x + y;
}

// Create a memoized version of the 'add' function
const memoizedAdd = memoize(add);