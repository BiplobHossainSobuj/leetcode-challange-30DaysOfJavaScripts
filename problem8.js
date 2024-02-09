var compose = function (functions) {
    let fn = [...functions];
    return function (x) {
        let result = x;
        for (let i = fn.length - 1; i >= 0; i--) {
            result=(fn[i](x));
            x = result;
        }
        return result;
    }
};
const fn1 = compose([x => x + 1, x => 2 * x]);
console.log(fn1(4));
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1));
const fn3 = compose([]);
console.log(fn3(42));