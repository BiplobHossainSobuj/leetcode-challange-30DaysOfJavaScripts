/**
 * 2666. Allow One Function Call
 * @param {Function} fn
 * @return {Function}
 */

var once = function(fn) {
    let called = false;
    return function(...args){
        if (!called) {
            called=true;
            return fn(...args)
        }
        fn(...args);
        
    }
    
};
let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn);
console.dir(onceFn);
console.log(onceFn(1,2,3));
console.log(onceFn(2,3,6));
let fn2 = (a,b,c) => (a * b * c);
let onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4));
console.log(onceFn2(2,3,6));