module.exports = function arrayToObject(inputArray) {
    const result = {};
    [, result.username, result.email] = inputArray;
    return result;
};