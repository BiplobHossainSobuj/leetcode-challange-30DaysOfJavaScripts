/**
 * 2723. Add Two Promises
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */


var addTwoPromises = async function(promise1, promise2) {
    const result = await promise1 + await promise2;
    return result;
};

addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)), new Promise(resolve => setTimeout(() => resolve(5), 60)))
    .then(console.log);