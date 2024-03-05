function calculateTime(value, fromTime, toTime){
    fromTime = fromTime.toLowerCase();
    toTime = toTime.toLowerCase();
    if(fromTime === 's' && toTime === 'min'){
        return (value/60);
    }else if(fromTime === 'min' && toTime === 's'){
        return value*60;
    }else if(fromTime === 'min' && toTime === 'h'){
        return value/60;
    }else if(fromTime === 'h' && toTime === 'min'){
        return value*60;
    }else if(fromTime === 's' && toTime === 'h'){
        return (value/3600);
    }else if(fromTime === 'h' && toTime === 's'){
        return value*3600;
    }
    return "Conversion not supported"; 
}

module.exports = calculateTime;
