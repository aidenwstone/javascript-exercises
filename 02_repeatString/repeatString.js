const repeatString = function(stringToRepeat, repetitions) {
    let repeatedString = "";

    for (let i = 0; i < repetitions; i++) {
        repeatedString += stringToRepeat;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
