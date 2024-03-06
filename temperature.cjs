function calculateTemperature(temp, fromTemp, toTemp){
    fromTemp = fromTemp.toLowerCase();
    toTemp = toTemp.toLowerCase();

    if ((fromTemp === "c") && (toTemp === "f")) {
        return (temp * 9 / 5) + 32;
    } else if ((fromTemp === "f") && (toTemp === "c")) {
        return (temp - 32) * 5 / 9;
    } else if ((fromTemp === "f") && (toTemp === "k")) {
        return ((5 * temp - 160) / 9) + 273.15;
    } else if ((fromTemp === "k") && (toTemp === "f")) {
        return ((5 * (temp - 273.15) - 160) / 9);
    } else if ((fromTemp === "k") && (toTemp === "c")) {
        return temp - 273.15;
    } else if ((fromTemp === "c") && (toTemp === "k")) {
        return temp + 273.15;
    } 
    return "Conversion not supported";
}

module.exports = calculateTemperature;