
function sumIntegers(...args) {
    return args.reduce((acc, val) => acc + (Number.isInteger(val) ? val : 0), 0);
}

function sumFloats(...args) {
    return args.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
}

exports.sumIntegers = sumIntegers;
