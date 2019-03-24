/*
Memoization is the programmatic practice of making long recursive/iterative functions run much faster by caching the values that the function returns after its initial execution.
When we input the same value into our memoized function, it returns the value stored in the cache instead of running the function again, thus boosting performance.
No longer does your program have to recalculate every number to get a result.

Below is a basic way to memoize a basic function
 */


function memoize(func) {
    var cache = {};

    return function() {
        //You can decide what key should be here to cache, it can either be the first function arg or any argument conbination
        var key = JSON.stringify(arguments);
        if (cache[key]) {
            console.log('From cached values')
            return cache[key];
        }
        else {
            console.log('New calculation');
            var value = func.apply(null, arguments);
            cache[key] = value;
            return value;
        }
    }
}



// We will memoize the add function which adds number 10 to given number
var add = num => num + 10;


var memoizedAdd = memoize(add);

// console.log(memoizedAdd(2)); // New calculation 12
// console.log(memoizedAdd(2)); // From cached values 12
// console.log(memoizedAdd(3)); // New calculation 13
// console.log(memoizedAdd(3)); // From cached values 13



// Now we will try to memoize factorial, but since we are writing the function using recursion we can't use the above memoize function
// We will have to use our own logic

var memoizedFactorial = (() => {
    var cache = {};
    return (num) => {
        console.log('A ', cache);
        if (cache[num]) {
            console.log("From Cache");
            return cache[num];
        }
        else {
            var val;
            if (num == 0) {
                val = 1;
            }
            else {
                val = num * memoizedFactorial(num - 1);
            }
            cache[num] = val;
            console.log("From New");
            return val;
        }
    }
})();

// memoizedFactorial(1);
// memoizedFactorial(2);
// memoizedFactorial(3);
// memoizedFactorial(4);





