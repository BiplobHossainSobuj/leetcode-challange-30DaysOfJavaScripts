/*
*2635. Apply Transform Over Each Element in Array
*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
*The returned array should be created such that returnedArray[i] = fn(arr[i], i).
*Please solve it without the built-in Array.map method.
*/

var map = function(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        newArray.push(fn(element,i));
    }
    return newArray;
};
const result1 = map([1,2,3],function plusone(n){
    return n+1;
});
const result2 = map([1,2,3],function plusI(n,i){
    return n+i;
});
const result3 = map([1,2,3],function constant(n, i) { return 42; });
console.log(result1);
console.log(result2);
console.log(result3);