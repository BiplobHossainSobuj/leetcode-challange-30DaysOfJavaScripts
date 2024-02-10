var argumentsLength = function(...args) {
    return args.length;
};
console.log(argumentsLength(1, 2, 3));
console.log(argumentsLength(5));
console.log(argumentsLength({}, null, "3"));
console.log(argumentsLength([11,97],[34,36],[15,55],[16,49],[24,19],[3,73],[54,34],[37,20],[37,72],[1,68],[8,92],[2,41],[3,95],[20,96],[9,53],[26,52],[34,45],[45,4],[29,20],[13,99],[27,26],[17,51],[18,80],[47,26],[44,35],[47,53],[51,44],[57,54],[4,51],[16,14],[6,65],[44,82],[59,72],[29,53],[57,84]));