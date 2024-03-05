function calculateWeight(value, fromWeight, toWeight) {
    fromWeight = fromWeight.toLowerCase();
    toWeight = toWeight.toLowerCase();
    if (fromWeight === 'kg' && toWeight === 'g') {
        return value * 1000;
    } else if (fromWeight === 'm' && toWeight === 'kg') {
        return value / 1000;
    } else if (fromWeight === 'g' && toWeight === 'mg') {
        return value * 1000;
    } else if (fromWeight === 'mm' && toWeight === 'g') {
        return value / 1000;
    } else if (fromWeight === 'kg' && toWeight === 'lb') {
        return value * 2.2;
    } else if (fromWeight === 'lb' && toWeight === 'kg') {
        return value*0.4536;
    } else if (fromWeight === 't' && toWeight === 'kg') {
        return value * 1000;
    } else if (fromWeight === 'kg' && toWeight === 't') {
        return value / 1000;
    } else if (fromWeight === 'q' && toWeight === 'kg') {
        return value * 100;
    } else if (fromWeight === 'kg' && toWeight === 'q') {
        return value / 100;
    }
    return "Conversion not supported"; 
}

module.exports = calculateWeight;
