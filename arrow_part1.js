module.exports = function arrowreduce(inputs) {
    let result = inputs.map(x => x[0]).reduce((x, y) => x + y + '');
    return (`[${inputs}] becomes "${result}"`);
}