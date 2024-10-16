const repeatString = function(stringToRepeat, repetitions) {
    let repeatedString = "";

    if (repetitions < 0) {
        return "ERROR";
    }

    for (let i = 0; i < repetitions; i++) {
        repeatedString += stringToRepeat;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
