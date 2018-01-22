module.exports = function getMin(...args) {
    let length = args.length;
    let result=args[0];
    for(let i=0;i<length;i++)
        if(args[i]<result)
            result=args[i];
    return result;
}
//let inputValues = process.argv.slice(2);
//let min = getMin(...inputValues);
//console.log(`The minimum of [${inputValues}] is ${min}`);