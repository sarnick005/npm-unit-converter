function calculateLength(value, fromLength, toLength) {
    fromLength = fromLength.toLowerCase();
    toLength = toLength.toLowerCase();
    if (fromLength === 'km' && toLength === 'm') {
        return value * 1000;
    } else if (fromLength === 'm' && toLength === 'km') {
        return value / 1000;
    } else if (fromLength === 'm' && toLength === 'cm') {
        return value * 100;
    } else if (fromLength === 'cm' && toLength === 'm') {
        return value / 100;
    } else if (fromLength === 'cm' && toLength === 'mm') {
        return value * 10;
    } else if (fromLength === 'mm' && toLength === 'cm') {
        return value / 10;
    } else if (fromLength === 'ft' && toLength === 'm') {
        return value * 0.3048;
    } else if (fromLength === 'm' && toLength === 'ft') {
        return value / 0.3048;
    } else if (fromLength === 'ft' && toLength === 'cm') {
        return value * 30.48;
    } else if (fromLength === 'cm' && toLength === 'ft') {
        return value / 30.48;
    }
    return "Conversion not supported"; 
}

module.exports = calculateLength;
