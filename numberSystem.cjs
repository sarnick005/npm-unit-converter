function calculateNumber(value, fromNumber, toNumber) {
    fromNumber = fromNumber.toLowerCase();
    toNumber = toNumber.toLowerCase();
    if (fromNumber === 'bin' && toNumber === 'oct') {
        return parseInt(value, 2).toString(8);
    } else if (fromNumber === 'oct' && toNumber === 'bin') {
        return parseInt(value, 8).toString(2);
    } else if (fromNumber === 'bin' && toNumber === 'dec') {
        return parseInt(value, 2);
    } else if (fromNumber === 'dec' && toNumber === 'bin') {
        return value.toString(2);
    } else if (fromNumber === 'bin' && toNumber === 'hex') {
        return parseInt(value, 2).toString(16);
    } else if (fromNumber === 'hex' && toNumber === 'bin') {
        return parseInt(value, 16).toString(2);
    } else if (fromNumber === 'oct' && toNumber === 'dec') {
         return parseInt(value, 8);
    } else if (fromNumber === 'dec' && toNumber === 'oct') {
        return value.toString(8);
    } else if (fromNumber === 'oct' && toNumber === 'hex') {
         return parseInt(value, 8).toString(16);
    } else if (fromNumber === 'hex' && toNumber === 'oct') {
        return parseInt(value, 16).toString(8);
    }else if (fromNumber === 'hex' && toNumber === 'dec') {
        return parseInt(value, 16);
    }else if (fromNumber === 'dec' && toNumber === 'hex') {
        return value.toString(16);
    }
    return "Conversion not supported"; 
}

module.exports = calculateNumber;
