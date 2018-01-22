module.exports = function average(...args) {
    let result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result/args.length;
};