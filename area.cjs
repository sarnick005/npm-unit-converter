function calculateArea(value, fromArea, toArea) {
    fromArea = fromArea.toLowerCase();
    toArea = toArea.toLowerCase();
    if (fromArea === 'sq-km' && toArea === 'ac') {
        return value * 247.11;
    } else if (fromArea === 'sq-km' && toArea === 'sq-m') {
        return value * 1000000;
    } else if (fromArea === 'sq-km' && toArea === 'sq-ft') {
        return value * 10763910.4;
    } else if (fromArea === 'sq-m' && toArea === 'sq-cm') {
        return value * 10000;
    } else if (fromArea === 'sq-m' && toArea === 'sq-mm') {
        return value * 1000000;
    } else if (fromArea === 'sq-m' && toArea === 'sq-ft') {
        return value * 10.764;
    } else if (fromArea === 'sq-m' && toArea === 'sq-in') {
        return value * 1550.0031;
    } else if (fromArea === 'sq-ft' && toArea === 'sq-in') {
        return value * 144;
    } else if (fromArea === 'sq-ft' && toArea === 'sq-m') {
        return value * 0.093;
    } else if (fromArea === 'sq-cm' && toArea === 'sq-mm') {
        return value *100;
    }else if (fromArea === 'sq-cm' && toArea === 'sq-ft') {
        return value *0.00108;
    }
    return "Conversion not supported"; 
}

module.exports = calculateArea;
