/**
 * 2623. Memoize
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] || cache[key]==0) {
            // console.log("from cache",cache)
            return cache[key];
        }else{
            const result = fn(...args);
            cache[key] = result;
            // console.log("from outside of the cache",cache);
            return result;
        }
    }
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(0, 10))
console.log(memoizedFn(0, 10))
console.log(memoizedFn(0, 0))
console.log(memoizedFn(0, 0))
console.log(callCount)