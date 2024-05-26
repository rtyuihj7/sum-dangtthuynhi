
function sumIntegers(...args) {
    return args.reduce((acc, val) => acc + (Number.isInteger(val) ? val : 0), 0);
}

exports.sumIntegers = sumIntegers;
