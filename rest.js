module.exports = function average(...args) {
    let result = 0;
    args.forEach(function (value) {
        result += value;
    });
    if(args.length>0)
        return result/args.length;
    else
        return 0;
};