const palindromes = function (str) {
    let result = true;

    const re = /[^a-z]/g;
    const newStr = str.toLowerCase().replaceAll(re, '');

    for (let i = 0; i <= newStr.length / 2; i++) {
        if (newStr[i] != newStr[newStr.length - (1 + i)]) {
            result = false;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
