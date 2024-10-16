const reverseString = function(stringToReverse) {
    let stringArray = stringToReverse.split("");
    let reversedString = "";

    for (let char of stringArray) {
        reversedString = char + reversedString;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
